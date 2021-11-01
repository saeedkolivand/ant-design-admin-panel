export const PrivilegesReduxTypes = {
  FETCH_PERMISSIONS: "FETCH_PERMISSIONS",
  FETCH_PERMISSIONS_SUCCESS: "FETCH_PERMISSIONS_SUCCESS",
  FETCH_PERMISSIONS_FAILURE: "FETCH_PERMISSIONS_FAILURE",
};

export const APP_Permissions = {
  alias: {},
  user: {
    user_getAll: "user_getAll",
  },
  locations: {
    locations_getLocationsList: "locations_getLocationsList",
  },
  shop: {
    "shop_cart.getMyCart": "shop_cart.getMyCart",
    "shop_cart.getAll": "shop_cart.getAll",
    "shop_product.getAll": "shop_product.getAll",
  },
  tickets: {
    "tickets_admin.getListTicket": "tickets_admin.getListTicket",
  },
  useraddress: {
    "useraddress_userAddress.getAll": "useraddress_userAddress.getAll",
    "useraddress_userAddress.getAllUserAddressesAdmin":
      "useraddress_userAddress.getAllUserAddressesAdmin",
  },
  admin: {
    "admin_transactions.getTransactions": "admin_transactions.getTransactions",
    "admin_notifications.sendAll": "admin_notifications.sendAll",
    "admin_notifications.getAll": "admin_notifications.getAll",
    all: "admin_all",
  },
  adminPanel: {
    "adminPanel_subscriber.get": "adminPanel_subscriber.get",
    "adminPanel_subscriber.update": "adminPanel_subscriber.update",
    all: "adminPanel_all",
  },
  contents: {
    "contents_tags.getList": "contents_tags.getList",
    "contents_tags.get": "contents_tags.get",
    "contents_tags.update": "contents_tags.update",
    "contents_tags.delete": "contents_tags.delete",
    "contents_tags.create": "contents_tags.create",
    "contents_categories.list": "contents_categories.list",
    "contents_categories.delete": "contents_categories.delete",
    "contents_categories.get": "contents_categories.get",
    "contents_categories.add": "contents_categories.add",
    "contents_categories.edit": "contents_categories.edit",
    contents_add: "contents_add",
    contents_edit: "contents_edit",
    contents_delete: "contents_delete",
    contents_getContentList: "contents_getContentList",
    "contents_user-rate.add": "contents_user-rate.add",
    "contents_locations.getContentLocationsList":
      "contents_locations.getContentLocationsList",
    contents_get: "contents_get",
    all: "contents_all",
  },
  discount: {
    "discount_discount-relates.updateDiscountRelate":
      "discount_discount-relates.updateDiscountRelate",
    "discount_discount-relates.getListDiscountRelate":
      "discount_discount-relates.getListDiscountRelate",
    "discount_discount-relates.valid.getValidationSubscriber":
      "discount_discount-relates.valid.getValidationSubscriber",
    "discount_discount-relates.getDiscountRelate":
      "discount_discount-relates.getDiscountRelate",
    "discount_discount-relates.deleteDiscountRelate":
      "discount_discount-relates.deleteDiscountRelate",
    "discount_discount-relates.createDiscountRelate":
      "discount_discount-relates.createDiscountRelate",
    "discount_discounts.updateDiscount": "discount_discounts.updateDiscount",
    "discount_discounts.state.changeState":
      "discount_discounts.state.changeState",
    "discount_discounts.getListDiscount": "discount_discounts.getListDiscount",
    "discount_discounts.getDiscount": "discount_discounts.getDiscount",
    "discount_discounts.deleteDiscount": "discount_discounts.deleteDiscount",
    "discount_discounts.createDiscount": "discount_discounts.createDiscount",
    all: "discount_all",
  },
  file: {
    file_createFolder: "file_createFolder",
    file_upload: "file_upload",
    file_get: "file_get",
    file_getRoot: "file_getRoot",
    file_getContent: "file_getContent",
    all: "file_all",
  },
  financial: {
    "financial_list.checkouts": "financial_list.checkouts",
    financial_facture: "financial_facture",
    "financial_check.checkout": "financial_check.checkout",
    "financial_accept.checkout": "financial_accept.checkout",
    "financial_history.checkout": "financial_history.checkout",
    financial_checkout: "financial_checkout",
    "financial_admin.checkout": "financial_admin.checkout",
    all: "financial_all",
  },
  faq: {
    "faq_queans.create": "faq_queans.create",
    "faq_category.create": "faq_category.create",
  },
  geo: {
    geo_getList: "geo_getList",
    geo_get: "geo_get",
    geo_update: "geo_update",
    geo_delete: "geo_delete",
    geo_create: "geo_create",
    all: "geo_all",
  },
  ipg: {
    "ipg_settings.getAll": "ipg_settings.getAll",
    "ipg_settings.update": "ipg_settings.update",
    "ipg_settings.getByKey": "ipg_settings.getByKey",
    "ipg_transaction.v1.get": "ipg_transaction.v1.get",
    "ipg_transaction.create": "ipg_transaction.create",
    "ipg_transaction.update": "ipg_transaction.update",
    "ipg_transaction.getAll": "ipg_transaction.getAll",
    "ipg_transaction.v1.delete": "ipg_transaction.v1.delete",
    "ipg_bank-gateway.create": "ipg_bank-gateway.create",
    "ipg_bank-gateway.update": "ipg_bank-gateway.update",
    "ipg_bank-gateway.getAll": "ipg_bank-gateway.getAll",
    "ipg_bank-gateway.getAllEnabled": "ipg_bank-gateway.getAllEnabled",
    "ipg_bank-gateway.get": "ipg_bank-gateway.get",
    "ipg_bank-gateway.delete": "ipg_bank-gateway.delete",
    all: "ipg_all",
  },
  lawone: {
    "lawone_subscriber.deleteAllUserData":
      "lawone_subscriber.deleteAllUserData",
    "lawone_subscriber.deleteRequest": "lawone_subscriber.deleteRequest",
    all: "lawone_all",
  },
  message: {
    message_send: "message_send",
    message_deleteMessage: "message_deleteMessage",
    message_getMessages: "message_getMessages",
    all: "message_all",
  },
  mgs: {
    "mgs_push.token.send": "mgs_push.token.send",
    "mgs_push.token.create": "mgs_push.token.create",
    "mgs_push.token.update": "mgs_push.token.update",
    "mgs_push.token.getAll": "mgs_push.token.getAll",
    "mgs_push.token.get": "mgs_push.token.get",
    "mgs_push.token.delete": "mgs_push.token.delete",
    "mgs_mail-server.create": "mgs_mail-server.create",
    "mgs_mail-server.update": "mgs_mail-server.update",
    "mgs_mail-server.delete": "mgs_mail-server.delete",
    "mgs_mail-server.get": "mgs_mail-server.get",
    "mgs_mail-server.getAll": "mgs_mail-server.getAll",
    "mgs_mail-server.activate": "mgs_mail-server.activate",
    "mgs_subscriber.sendSms": "mgs_subscriber.sendSms",
    "mgs_subscriber.sendMail": "mgs_subscriber.sendMail",
    "mgs_push.server.update": "mgs_push.server.update",
    "mgs_push.server.getAll": "mgs_push.server.getAll",
    "mgs_push.server.get": "mgs_push.server.get",
    "mgs_push.server.delete": "mgs_push.server.delete",
    "mgs_push.server.create": "mgs_push.server.create",
    "mgs_sms-server.create": "mgs_sms-server.create",
    "mgs_sms-server.update": "mgs_sms-server.update",
    "mgs_sms-server.delete": "mgs_sms-server.delete",
    "mgs_sms-server.get": "mgs_sms-server.get",
    "mgs_sms-server.getAll": "mgs_sms-server.getAll",
    "mgs_sms-server.activate": "mgs_sms-server.activate",
    all: "mgs_all",
  },
  notifications: {
    notifications_getAll: "notifications_getAll",
    notifications_create: "notifications_create",
    notifications_deleteOne: "notifications_deleteOne",
    notifications_deleteAll: "notifications_deleteAll",
    all: "notifications_all",
  },
  securityServer: {
    "securityServer_client-credential.edit":
      "securityServer_client-credential.edit",
    "securityServer_client-credential.delete":
      "securityServer_client-credential.delete",
    "securityServer_client-credential.get":
      "securityServer_client-credential.get",
    "securityServer_client-credential.add":
      "securityServer_client-credential.add",
    "securityServer_client-credential.getAll":
      "securityServer_client-credential.getAll",
    "securityServer_role-permission.getAll":
      "securityServer_role-permission.getAll",
    "securityServer_role-permission.get": "securityServer_role-permission.get",
    "securityServer_role-permission.add": "securityServer_role-permission.add",
    "securityServer_role-permission.edit":
      "securityServer_role-permission.edit",
    "securityServer_role-permission.selectiveEdit":
      "securityServer_role-permission.selectiveEdit",
    "securityServer_role-permission.v1.delete":
      "securityServer_role-permission.v1.delete",
    "securityServer_role-permission.privileges":
      "securityServer_role-permission.privileges",
    "securityServer_user-credential.getAll":
      "securityServer_user-credential.getAll",
    "securityServer_user-credential.add": "securityServer_user-credential.add",
    "securityServer_user-credential.edit":
      "securityServer_user-credential.edit",
    "securityServer_user-credential.delete":
      "securityServer_user-credential.delete",
    "securityServer_user-credential.get": "securityServer_user-credential.get",
    all: "securityServer_all",
  },
  session: {
    "session_admin.close": "session_admin.close",
    session_getSessionDetail: "session_getSessionDetail",
    session_join: "session_join",
    session_getAllSessions: "session_getAllSessions",
    session_searchAllSessions: "session_searchAllSessions",
    session_getAllSessionsAdmin: "session_getAllSessionsAdmin",
    session_refer: "session_refer",
    session_extend: "session_extend",
    session_rejectCase: "session_rejectCase",
    session_assign: "session_assign",
    session_create: "session_create",
    session_getOpenSessions: "session_getOpenSessions",
    session_close: "session_close",
    all: "session_all",
  },
  sessionCategory: {
    sessionCategory_getSessionCategory: "sessionCategory_getSessionCategory",
    sessionCategory_getChildrenOfSessionCategory:
      "sessionCategory_getChildrenOfSessionCategory",
    sessionCategory_getAllSessionCategories:
      "sessionCategory_getAllSessionCategories",
    sessionCategory_createSessionCategory:
      "sessionCategory_createSessionCategory",
    sessionCategory_updateSessionCategory:
      "sessionCategory_updateSessionCategory",
    sessionCategory_deleteSessionCategory:
      "sessionCategory_deleteSessionCategory",
    all: "sessionCategory_all",
  },
  subscriber: {
    "subscriber_verification.create": "subscriber_verification.create",
    "subscriber_verification.mobile.verify":
      "subscriber_verification.mobile.verify",
    subscriber_delete: "subscriber_delete",
    subscriber_create: "subscriber_create",
    subscriber_update: "subscriber_update",
    subscriber_selectiveUpdate: "subscriber_selectiveUpdate",
    subscriber_getAll: "subscriber_getAll",
    subscriber_get: "subscriber_get",
    "subscriber_profile.edit": "subscriber_profile.edit",
    subscriber_report: "subscriber_report",
    "subscriber_profile.uploadProfilePicture":
      "subscriber_profile.uploadProfilePicture",
    "subscriber_profile.get": "subscriber_profile.get",
    subscriber_updatePassword: "subscriber_updatePassword",
    subscriber_lock: "subscriber_lock",
    subscriber_unlock: "subscriber_unlock",
    "subscriber_admin-panel.update": "subscriber_admin-panel.update",
    "subscriber_admin-panel.getAll": "subscriber_admin-panel.getAll",
    all: "subscriber_all",
  },
  support: {
    "support_categories.deleteCategory": "support_categories.deleteCategory",
    "support_categories.getCategory": "support_categories.getCategory",
    "support_categories.getCategoryList": "support_categories.getCategoryList",
    "support_categories.createCategory": "support_categories.createCategory",
    "support_categories.updateCategory": "support_categories.updateCategory",
    "support_tickets.state.changeState": "support_tickets.state.changeState",
    "support_tickets.updateTicket": "support_tickets.updateTicket",
    "support_tickets.getListTicket": "support_tickets.getListTicket",
    "support_tickets.getTicket": "support_tickets.getTicket",
    "support_tickets.deleteTicket": "support_tickets.deleteTicket",
    "support_tickets.createTicket": "support_tickets.createTicket",
    "support_tickets.getSubscriberTickets":
      "support_tickets.getSubscriberTickets",
    "support_tickets.admin.getListTicket":
      "support_tickets.admin.getListTicket",
    "support_ticket.createRate": "support_ticket.createRate",
    "support_ticket.getRates": "support_ticket.getRates",
    "support_ticket.getRate": "support_ticket.getRate",
    "support_ticket-messages.updateTicketMessage":
      "support_ticket-messages.updateTicketMessage",
    "support_ticket-messages.ticket.getTicketMessageListByTicketId":
      "support_ticket-messages.ticket.getTicketMessageListByTicketId",
    "support_ticket-messages.getTicketMessage":
      "support_ticket-messages.getTicketMessage",
    "support_ticket-messages.deleteTicketMessage":
      "support_ticket-messages.deleteTicketMessage",
    "support_ticket-messages.createTicketMessage":
      "support_ticket-messages.createTicketMessage",
    all: "support_all",
  },
  wallet: {
    wallet_doTransaction: "wallet_doTransaction",
    "wallet_subscriber.getTransaction": "wallet_subscriber.getTransaction",
    wallet_getAllTransactions: "wallet_getAllTransactions",
    wallet_getAllSubscriberTransactions: "wallet_getAllSubscriberTransactions",
    "wallet_subscriber.doTransaction": "wallet_subscriber.doTransaction",
    wallet_getRelatedSum: "wallet_getRelatedSum",
    wallet_getRelatedRevenueList: "wallet_getRelatedRevenueList",
    wallet_getBalance: "wallet_getBalance",
    "wallet_bank-card.delete": "wallet_bank-card.delete",
    "wallet_bank-card.create": "wallet_bank-card.create",
    "wallet_bank-card.update": "wallet_bank-card.update",
    "wallet_bank-card.getAll": "wallet_bank-card.getAll",
    "wallet_bank-card.get": "wallet_bank-card.get",
    all: "wallet_all",
  },
  yearInflationRate: {
    yearInflationRate_getList: "yearInflationRate_getList",
    yearInflationRate_calculate: "yearInflationRate_calculate",
    yearInflationRate_get: "yearInflationRate_get",
    yearInflationRate_update: "yearInflationRate_update",
    yearInflationRate_delete: "yearInflationRate_delete",
    yearInflationRate_create: "yearInflationRate_create",
    all: "yearInflationRate_all",
  },
  order: {
    order_markOrderAsSettled: "order_markOrderAsSettled",
    order_markOrderAsDeliveryFailed: "order_markOrderAsDeliveryFailed",
  },
};
