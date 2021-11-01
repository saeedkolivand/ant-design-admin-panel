import React, { useEffect, useState } from "react";
import { Button, Form, message, Modal, Row } from "antd";
import { Log, logType } from "../../../../app/util";
import { createService, updateService } from "../../crud.api";
import { CreateProps } from "./create.types";

const Create: React.FC<CreateProps> = (props) => {
  const {
    title = "+",
    apiService,
    formProps,
    api,
    modal,
    button,
    successMessage = "Created Successfully",
    // errorMessage = "Error sending information",
    justLog = false,
    fetchData,
    forUpdate = false,
    otherButtons,
    buttonInitial,
    modalInitial, // only for update
    formPropsInitial, // only for update
    // record, // only for update
    children,
  } = props;

  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      forUpdate &&
      formPropsInitial &&
      JSON.stringify(formPropsInitial.initialValues) !== "{}"
    ) {
      form.setFieldsValue(formPropsInitial.initialValues);
    }
    // eslint-disable-next-line
  }, [formPropsInitial]);

  useEffect(() => {
    if (!showModal) form.resetFields();
  }, [showModal]);

  const handleCancel = () => setShowModal(!showModal);

  const onSubmit = (values: object) => {
    setLoading(true);
    let data: any = {
      ...values,
    };

    if (
      data &&
      formPropsInitial &&
      formPropsInitial.initialValues &&
      formPropsInitial.initialValues.id
    ) {
      data.id = formPropsInitial.initialValues.id;
    }

    if (formProps && formProps.onFinish) {
      data = formProps.onFinish(
        data,
        formPropsInitial && formPropsInitial.initialValues
          ? formPropsInitial.initialValues
          : {}
      );
    }

    if (justLog) {
      return false;
    }

    if (api) {
      if (forUpdate) {
        updateService(api, data)
          .then(() => {
            message.success(successMessage);
            form.resetFields();
            setLoading(false);
            if (fetchData) {
              fetchData();
            }
            modalInitial.onCancel();
          })
          .catch((error) => {
            setLoading(false);
            // message.error(errorMessageHandler(error));
            Log(error, logType.error);
          });
      } else {
        createService(api, data)
          .then(() => {
            form.resetFields();
            message.success(successMessage);
            setLoading(false);
            if (fetchData) {
              fetchData();
            }
            setShowModal(false);
          })
          .catch((error) => {
            setLoading(false);
            // message.error(errorMessageHandler(error));
            Log(error, logType.error);
          });
      }
    } else if (apiService) {
      apiService(data)
        .then(() => {
          message.success(successMessage);
          form.resetFields();
          setLoading(false);
          if (fetchData) {
            fetchData();
          }
          if (forUpdate) {
            modalInitial.onCancel();
          } else {
            setShowModal(!showModal);
          }
        })
        .catch((error: never) => {
          setLoading(false);
          // message.error(errorMessageHandler(error));
          Log(error, logType.error);
        });
    }
  };

  return (
    <div className="crud">
      <Row className="header">
        {!forUpdate && (
          <Button
            onClick={() => setShowModal(!showModal)}
            {...buttonInitial}
            {...button}
            // style={{
            //   // marginTop: "3ch",
            //   // background: "#fff",
            //   color: "#000",
            // }}
          >
            {button && button.title ? button.title : title}
          </Button>
        )}
        {otherButtons && otherButtons}
        <Modal
          title={modal && modal.title ? modal.title : title}
          visible={showModal}
          onCancel={handleCancel}
          okType="primary"
          okButtonProps={{ loading }}
          {...modalInitial}
          {...modal}
          onOk={form.submit}
        >
          <Form
            form={form}
            name="register"
            scrollToFirstError
            {...formProps}
            onFinish={onSubmit}
          >
            {React.cloneElement(children, {
              showModal: forUpdate ? modalInitial.visible : showModal,
              form,
            })}
          </Form>
        </Modal>
      </Row>
    </div>
  );
};

export default Create;
