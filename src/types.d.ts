{
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "description": null,
        "fields": [
          {
            "name": "activeChannel",
            "description": "The active Channel",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Channel",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "activeCustomer",
            "description": "The active Customer",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "activeOrder",
            "description": "The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the\nstate of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered \"active\" and this\nquery will once again return `null`.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "availableCountries",
            "description": "An array of supported Countries",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Country",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "collections",
            "description": "A list of Collections available to the shop",
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CollectionListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CollectionList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "collection",
            "description": "Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result.",
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "slug",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Collection",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eligibleShippingMethods",
            "description": "Returns a list of eligible shipping methods based on the current active Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingMethodQuote",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eligiblePaymentMethods",
            "description": "Returns a list of payment methods and their eligibility based on the current active Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentMethodQuote",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facets",
            "description": "A list of Facets available to the shop",
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facet",
            "description": "Returns a Facet by its id",
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Facet",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "me",
            "description": "Returns information about the current authenticated User",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "CurrentUser",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nextOrderStates",
            "description": "Returns the possible next states that the activeOrder can transition to",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "order",
            "description": "Returns an Order based on the id. Note that in the Shop API, only orders belonging to the\ncurrently-authenticated User may be queried.",
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "orderByCode",
            "description": "Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)\nthis query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation\nscreen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing\ngeneral anonymous access to Order data.",
            "args": [
              {
                "name": "code",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "product",
            "description": "Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result.",
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "slug",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "products",
            "description": "Get a list of Products",
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "search",
            "description": "Search Products based on the criteria set by the `SearchInput`",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SearchInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SearchResponse",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "ID",
        "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "String",
        "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "description": null,
        "fields": [
          {
            "name": "addItemToOrder",
            "description": "Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available.",
            "args": [
              {
                "name": "productVariantId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "quantity",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "UpdateOrderItemsResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "removeOrderLine",
            "description": "Remove an OrderLine from the Order",
            "args": [
              {
                "name": "orderLineId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "RemoveOrderItemsResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "removeAllOrderLines",
            "description": "Remove all OrderLine from the Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "RemoveOrderItemsResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "adjustOrderLine",
            "description": "Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available.",
            "args": [
              {
                "name": "orderLineId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "quantity",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "UpdateOrderItemsResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "applyCouponCode",
            "description": "Applies the given coupon code to the active Order",
            "args": [
              {
                "name": "couponCode",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "ApplyCouponCodeResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "removeCouponCode",
            "description": "Removes the given coupon code from the active Order",
            "args": [
              {
                "name": "couponCode",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "transitionOrderToState",
            "description": "Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates`",
            "args": [
              {
                "name": "state",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "UNION",
              "name": "TransitionOrderToStateResult",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "setOrderShippingAddress",
            "description": "Sets the shipping address for this order",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAddressInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "setOrderBillingAddress",
            "description": "Sets the billing address for this order",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAddressInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "setOrderCustomFields",
            "description": "Allows any custom fields to be set for the active order",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateOrderInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "ActiveOrderResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "setOrderShippingMethod",
            "description": "Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query.\nAn Order can have multiple shipping methods, in which case you can pass an array of ids. In this case,\nyou should configure a custom ShippingLineAssignmentStrategy in order to know which OrderLines each\nshipping method will apply to.",
            "args": [
              {
                "name": "shippingMethodId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    }
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "SetOrderShippingMethodResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "addPaymentToOrder",
            "description": "Add a Payment to the Order",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PaymentInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "AddPaymentToOrderResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "setCustomerForOrder",
            "description": "Set the Customer for the Order. Required only if the Customer is not currently logged in",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCustomerInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "SetCustomerForOrderResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "login",
            "description": "Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})`",
            "args": [
              {
                "name": "username",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "password",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "rememberMe",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "NativeAuthenticationResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "authenticate",
            "description": "Authenticates the user using a named authentication strategy",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AuthenticationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "rememberMe",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "AuthenticationResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "logout",
            "description": "End the current authenticated session",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Success",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "registerCustomerAccount",
            "description": "Register a Customer account with the given credentials. There are three possible registration flows:\n\n_If `authOptions.requireVerification` is set to `true`:_\n\n1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That\n   verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then\n   verified and authenticated in one step.\n2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That\n   verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then\n   verified and authenticated in one step.\n\n_If `authOptions.requireVerification` is set to `false`:_\n\n3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RegisterCustomerInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "RegisterCustomerAccountResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "refreshCustomerVerification",
            "description": "Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true.",
            "args": [
              {
                "name": "emailAddress",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "RefreshCustomerVerificationResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCustomer",
            "description": "Update an existing Customer",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCustomerInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createCustomerAddress",
            "description": "Create a new Customer Address",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateAddressInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Address",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCustomerAddress",
            "description": "Update an existing Address",
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateAddressInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Address",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteCustomerAddress",
            "description": "Delete an existing Address",
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Success",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "verifyCustomerAccount",
            "description": "Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.\n\nIf the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be\nprovided here.",
            "args": [
              {
                "name": "token",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "password",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "VerifyCustomerAccountResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCustomerPassword",
            "description": "Update the password of the active Customer",
            "args": [
              {
                "name": "currentPassword",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "newPassword",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "UpdateCustomerPasswordResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "requestUpdateCustomerEmailAddress",
            "description": "Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled\n(as is the default), then the `identifierChangeToken` will be assigned to the current User and\na IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email\nthat verification token to the Customer, which is then used to verify the change of email address.",
            "args": [
              {
                "name": "password",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "newEmailAddress",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "RequestUpdateCustomerEmailAddressResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCustomerEmailAddress",
            "description": "Confirm the update of the emailAddress with the provided token, which has been generated by the\n`requestUpdateCustomerEmailAddress` mutation.",
            "args": [
              {
                "name": "token",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "UpdateCustomerEmailAddressResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "requestPasswordReset",
            "description": "Requests a password reset email to be sent",
            "args": [
              {
                "name": "emailAddress",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "UNION",
              "name": "RequestPasswordResetResult",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resetPassword",
            "description": "Resets a Customer's password based on the provided token",
            "args": [
              {
                "name": "token",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "password",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "ResetPasswordResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Int",
        "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Boolean",
        "description": "The `Boolean` scalar type represents `true` or `false`.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Address",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fullName",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "company",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "streetLine1",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "streetLine2",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "province",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postalCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "country",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Country",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultShippingAddress",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultBillingAddress",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Asset",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "AssetType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fileSize",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mimeType",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "width",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "height",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "source",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "preview",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "focalPoint",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Coordinate",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "tags",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Tag",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Coordinate",
        "description": null,
        "fields": [
          {
            "name": "x",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "y",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Float",
        "description": "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AssetList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "AssetType",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "IMAGE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VIDEO",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BINARY",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CurrentUser",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "identifier",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channels",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrentUserChannel",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CurrentUserChannel",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "token",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "permissions",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "Permission",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Channel",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "token",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultTaxZone",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Zone",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultShippingZone",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Zone",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultLanguageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "availableLanguageCodes",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "LanguageCode",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currencyCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "isDeprecated": true,
            "deprecationReason": "Use defaultCurrencyCode instead"
          },
          {
            "name": "defaultCurrencyCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "availableCurrencyCodes",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CurrencyCode",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "trackInventory",
            "description": "Not yet used - will be implemented in a future release.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "outOfStockThreshold",
            "description": "Not yet used - will be implemented in a future release.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pricesIncludeTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "seller",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Seller",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Collection",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "ENUM",
              "name": "LanguageCode",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "slug",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "breadcrumbs",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CollectionBreadcrumb",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "position",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "featuredAsset",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "assets",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parent",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Collection",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parentId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "children",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Collection",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "filters",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CollectionTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productVariants",
            "description": null,
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductVariantListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CollectionBreadcrumb",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "slug",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CollectionTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "slug",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CollectionList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Collection",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "GlobalFlag",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "TRUE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FALSE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INHERIT",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "AdjustmentType",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "PROMOTION",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DISTRIBUTED_ORDER_PROMOTION",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OTHER",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "DeletionResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "DELETED",
            "description": "The entity was successfully deleted",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NOT_DELETED",
            "description": "Deletion did not take place, reason given in message",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "Permission",
        "description": "@description\nPermissions for administrators and customers. Used to control access to\nGraphQL resolvers via the {@link Allow} decorator.\n\n## Understanding Permission.Owner\n\n`Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only\nbe accessible to the \"owner\" of that resource.\n\nFor example, the Shop API `activeCustomer` query resolver should only return the Customer object for the \"owner\" of that Customer, i.e.\nbased on the activeUserId of the current session. As a result, the resolver code looks like this:\n\n@example\n```TypeScript\n\\@Query()\n\\@Allow(Permission.Owner)\nasync activeCustomer(\\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {\n  const userId = ctx.activeUserId;\n  if (userId) {\n    return this.customerService.findOneByUserId(ctx, userId);\n  }\n}\n```\n\nHere we can see that the \"ownership\" must be enforced by custom logic inside the resolver. Since \"ownership\" cannot be defined generally\nnor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner\nof the resource has access. If not, then it is the equivalent of using `Permission.Public`.\n\n\n@docsCategory common",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "Authenticated",
            "description": "Authenticated means simply that the user is logged in",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SuperAdmin",
            "description": "SuperAdmin has unrestricted access to all operations",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "Owner",
            "description": "Owner means the user owns this entity, e.g. a Customer's own Order",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "Public",
            "description": "Public means any unauthenticated user may perform the operation",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateGlobalSettings",
            "description": "Grants permission to update GlobalSettings",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateCatalog",
            "description": "Grants permission to create Products, Facets, Assets, Collections",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadCatalog",
            "description": "Grants permission to read Products, Facets, Assets, Collections",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateCatalog",
            "description": "Grants permission to update Products, Facets, Assets, Collections",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteCatalog",
            "description": "Grants permission to delete Products, Facets, Assets, Collections",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateSettings",
            "description": "Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadSettings",
            "description": "Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateSettings",
            "description": "Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteSettings",
            "description": "Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateAdministrator",
            "description": "Grants permission to create Administrator",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadAdministrator",
            "description": "Grants permission to read Administrator",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateAdministrator",
            "description": "Grants permission to update Administrator",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteAdministrator",
            "description": "Grants permission to delete Administrator",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateAsset",
            "description": "Grants permission to create Asset",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadAsset",
            "description": "Grants permission to read Asset",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateAsset",
            "description": "Grants permission to update Asset",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteAsset",
            "description": "Grants permission to delete Asset",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateChannel",
            "description": "Grants permission to create Channel",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadChannel",
            "description": "Grants permission to read Channel",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateChannel",
            "description": "Grants permission to update Channel",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteChannel",
            "description": "Grants permission to delete Channel",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateCollection",
            "description": "Grants permission to create Collection",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadCollection",
            "description": "Grants permission to read Collection",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateCollection",
            "description": "Grants permission to update Collection",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteCollection",
            "description": "Grants permission to delete Collection",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateCountry",
            "description": "Grants permission to create Country",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadCountry",
            "description": "Grants permission to read Country",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateCountry",
            "description": "Grants permission to update Country",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteCountry",
            "description": "Grants permission to delete Country",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateCustomer",
            "description": "Grants permission to create Customer",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadCustomer",
            "description": "Grants permission to read Customer",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateCustomer",
            "description": "Grants permission to update Customer",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteCustomer",
            "description": "Grants permission to delete Customer",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateCustomerGroup",
            "description": "Grants permission to create CustomerGroup",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadCustomerGroup",
            "description": "Grants permission to read CustomerGroup",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateCustomerGroup",
            "description": "Grants permission to update CustomerGroup",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteCustomerGroup",
            "description": "Grants permission to delete CustomerGroup",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateFacet",
            "description": "Grants permission to create Facet",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadFacet",
            "description": "Grants permission to read Facet",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateFacet",
            "description": "Grants permission to update Facet",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteFacet",
            "description": "Grants permission to delete Facet",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateOrder",
            "description": "Grants permission to create Order",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadOrder",
            "description": "Grants permission to read Order",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateOrder",
            "description": "Grants permission to update Order",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteOrder",
            "description": "Grants permission to delete Order",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreatePaymentMethod",
            "description": "Grants permission to create PaymentMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadPaymentMethod",
            "description": "Grants permission to read PaymentMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdatePaymentMethod",
            "description": "Grants permission to update PaymentMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeletePaymentMethod",
            "description": "Grants permission to delete PaymentMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateProduct",
            "description": "Grants permission to create Product",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadProduct",
            "description": "Grants permission to read Product",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateProduct",
            "description": "Grants permission to update Product",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteProduct",
            "description": "Grants permission to delete Product",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreatePromotion",
            "description": "Grants permission to create Promotion",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadPromotion",
            "description": "Grants permission to read Promotion",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdatePromotion",
            "description": "Grants permission to update Promotion",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeletePromotion",
            "description": "Grants permission to delete Promotion",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateShippingMethod",
            "description": "Grants permission to create ShippingMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadShippingMethod",
            "description": "Grants permission to read ShippingMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateShippingMethod",
            "description": "Grants permission to update ShippingMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteShippingMethod",
            "description": "Grants permission to delete ShippingMethod",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateTag",
            "description": "Grants permission to create Tag",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadTag",
            "description": "Grants permission to read Tag",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateTag",
            "description": "Grants permission to update Tag",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteTag",
            "description": "Grants permission to delete Tag",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateTaxCategory",
            "description": "Grants permission to create TaxCategory",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadTaxCategory",
            "description": "Grants permission to read TaxCategory",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateTaxCategory",
            "description": "Grants permission to update TaxCategory",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteTaxCategory",
            "description": "Grants permission to delete TaxCategory",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateTaxRate",
            "description": "Grants permission to create TaxRate",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadTaxRate",
            "description": "Grants permission to read TaxRate",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateTaxRate",
            "description": "Grants permission to update TaxRate",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteTaxRate",
            "description": "Grants permission to delete TaxRate",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateSeller",
            "description": "Grants permission to create Seller",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadSeller",
            "description": "Grants permission to read Seller",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateSeller",
            "description": "Grants permission to update Seller",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteSeller",
            "description": "Grants permission to delete Seller",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateStockLocation",
            "description": "Grants permission to create StockLocation",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadStockLocation",
            "description": "Grants permission to read StockLocation",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateStockLocation",
            "description": "Grants permission to update StockLocation",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteStockLocation",
            "description": "Grants permission to delete StockLocation",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateSystem",
            "description": "Grants permission to create System",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadSystem",
            "description": "Grants permission to read System",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateSystem",
            "description": "Grants permission to update System",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteSystem",
            "description": "Grants permission to delete System",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CreateZone",
            "description": "Grants permission to create Zone",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ReadZone",
            "description": "Grants permission to read Zone",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UpdateZone",
            "description": "Grants permission to update Zone",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DeleteZone",
            "description": "Grants permission to delete Zone",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "SortOrder",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "ErrorCode",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "UNKNOWN_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NATIVE_AUTH_STRATEGY_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INVALID_CREDENTIALS_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_STATE_TRANSITION_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "EMAIL_ADDRESS_CONFLICT_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GUEST_CHECKOUT_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_LIMIT_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NEGATIVE_QUANTITY_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INSUFFICIENT_STOCK_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "COUPON_CODE_INVALID_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "COUPON_CODE_EXPIRED_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "COUPON_CODE_LIMIT_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_MODIFICATION_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INELIGIBLE_SHIPPING_METHOD_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NO_ACTIVE_ORDER_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_PAYMENT_STATE_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INELIGIBLE_PAYMENT_METHOD_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PAYMENT_FAILED_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PAYMENT_DECLINED_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ALREADY_LOGGED_IN_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MISSING_PASSWORD_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PASSWORD_VALIDATION_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PASSWORD_ALREADY_SET_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VERIFICATION_TOKEN_INVALID_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VERIFICATION_TOKEN_EXPIRED_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PASSWORD_RESET_TOKEN_INVALID_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PASSWORD_RESET_TOKEN_EXPIRED_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NOT_VERIFIED_ERROR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "LogicalOperator",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "AND",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "NativeAuthStrategyError",
        "description": "Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InvalidCredentialsError",
        "description": "Returned if the user authentication credentials are not valid",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "authenticationError",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderStateTransitionError",
        "description": "Returned if there is an error in transitioning the Order state",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "transitionError",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fromState",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "toState",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "EmailAddressConflictError",
        "description": "Returned when attempting to create a Customer with an email address already registered to an existing User.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "GuestCheckoutError",
        "description": "Returned when attempting to set the Customer on a guest checkout when the configured GuestCheckoutStrategy does not allow it.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "errorDetail",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderLimitError",
        "description": "Returned when the maximum order size limit has been reached.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "maxItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "NegativeQuantityError",
        "description": "Returned when attempting to set a negative OrderLine quantity.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InsufficientStockError",
        "description": "Returned when attempting to add more items to the Order than are available",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "quantityAvailable",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "order",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Order",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CouponCodeInvalidError",
        "description": "Returned if the provided coupon code is invalid",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "couponCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CouponCodeExpiredError",
        "description": "Returned if the provided coupon code is invalid",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "couponCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CouponCodeLimitError",
        "description": "Returned if the provided coupon code is invalid",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "couponCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "limit",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderModificationError",
        "description": "Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "IneligibleShippingMethodError",
        "description": "Returned when attempting to set a ShippingMethod for which the Order is not eligible",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "NoActiveOrderError",
        "description": "Returned when invoking a mutation which depends on there being an active Order on the\ncurrent session.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "JSON",
        "description": "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "DateTime",
        "description": "A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Upload",
        "description": "The `Upload` scalar type represents a file upload.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Money",
        "description": "The `Money` scalar type represents monetary values and supports signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "PaginatedList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Node",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AssetList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CollectionList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CustomerList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FacetList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FacetValueList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "HistoryEntryList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ProductList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariantList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PromotionList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CountryList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ProvinceList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "RoleList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ShippingMethodList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TagList",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TaxRateList",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Address",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Asset",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Channel",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Collection",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CustomerGroup",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Customer",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FacetValue",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Facet",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "HistoryEntry",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderLine",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Payment",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Refund",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Fulfillment",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Surcharge",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PaymentMethod",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ProductOptionGroup",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ProductOption",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Product",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariant",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Promotion",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Country",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Province",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Role",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Seller",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ShippingMethod",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Tag",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TaxCategory",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TaxRate",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "User",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AuthenticationMethod",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Zone",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ErrorResult",
        "description": null,
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "GuestCheckoutError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderLimitError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NegativeQuantityError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InsufficientStockError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeLimitError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IneligibleShippingMethodError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderPaymentStateError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IneligiblePaymentMethodError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PaymentFailedError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PaymentDeclinedError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AlreadyLoggedInError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "MissingPasswordError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordAlreadySetError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Adjustment",
        "description": null,
        "fields": [
          {
            "name": "adjustmentSource",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "AdjustmentType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "amount",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "data",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TaxLine",
        "description": null,
        "fields": [
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxRate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ConfigArg",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ConfigArgDefinition",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "required",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultValue",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ConfigurableOperation",
        "description": null,
        "fields": [
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigArg",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ConfigurableOperationDefinition",
        "description": null,
        "fields": [
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigArgDefinition",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DeletionResponse",
        "description": null,
        "fields": [
          {
            "name": "result",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "DeletionResult",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ConfigArgInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "value",
            "description": "A JSON stringified representation of the actual value",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ConfigurableOperationInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "code",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "arguments",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ConfigArgInput",
                    "ofType": null
                  }
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringOperators",
        "description": "Operators for filtering on a String field",
        "fields": null,
        "inputFields": [
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notEq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notContains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "notIn",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "regex",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "isNull",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IDOperators",
        "description": "Operators for filtering on an ID field",
        "fields": null,
        "inputFields": [
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "notEq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "notIn",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "isNull",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanOperators",
        "description": "Operators for filtering on a Boolean field",
        "fields": null,
        "inputFields": [
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "isNull",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NumberRange",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "start",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "end",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NumberOperators",
        "description": "Operators for filtering on a Int or Float field",
        "fields": null,
        "inputFields": [
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "between",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberRange",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "isNull",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateRange",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "start",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "end",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateOperators",
        "description": "Operators for filtering on a DateTime field",
        "fields": null,
        "inputFields": [
          {
            "name": "eq",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "before",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "after",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "between",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateRange",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "isNull",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringListOperators",
        "description": "Operators for filtering on a list of String fields",
        "fields": null,
        "inputFields": [
          {
            "name": "inList",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NumberListOperators",
        "description": "Operators for filtering on a list of Number fields",
        "fields": null,
        "inputFields": [
          {
            "name": "inList",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanListOperators",
        "description": "Operators for filtering on a list of Boolean fields",
        "fields": null,
        "inputFields": [
          {
            "name": "inList",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IDListOperators",
        "description": "Operators for filtering on a list of ID fields",
        "fields": null,
        "inputFields": [
          {
            "name": "inList",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateListOperators",
        "description": "Operators for filtering on a list of Date fields",
        "fields": null,
        "inputFields": [
          {
            "name": "inList",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueFilterInput",
        "description": "Used to construct boolean expressions for filtering search results\nby FacetValue ID. Examples:\n\n* ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`\n* ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`\n* ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`",
        "fields": null,
        "inputFields": [
          {
            "name": "and",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "or",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SearchInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "term",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "facetValueFilters",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetValueFilterInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "collectionId",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "collectionSlug",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "groupByProduct",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "skip",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SearchResultSortParameter",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SearchResultSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "price",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateCustomerInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "emailAddress",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "customFields",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateAddressInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "fullName",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "company",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "streetLine1",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "streetLine2",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "city",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "province",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "postalCode",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "countryCode",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "defaultShippingAddress",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "defaultBillingAddress",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "customFields",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateAddressInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "fullName",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "company",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "streetLine1",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "streetLine2",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "city",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "province",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "postalCode",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "countryCode",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "defaultShippingAddress",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "defaultBillingAddress",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "customFields",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Success",
        "description": "Indicates that an operation succeeded, where we do not want to return any more specific information.",
        "fields": [
          {
            "name": "success",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethodQuote",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "price",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "priceWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "metadata",
            "description": "Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PaymentMethodQuote",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isEligible",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eligibilityMessage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "UpdateOrderItemsResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderLimitError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NegativeQuantityError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InsufficientStockError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RemoveOrderItemsResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetOrderShippingMethodResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderModificationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IneligibleShippingMethodError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ApplyCouponCodeResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CouponCodeLimitError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "CurrencyCode",
        "description": "@description\nISO 4217 currency code\n\n@docsCategory common",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "AED",
            "description": "United Arab Emirates dirham",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "AFN",
            "description": "Afghan afghani",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ALL",
            "description": "Albanian lek",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "AMD",
            "description": "Armenian dram",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ANG",
            "description": "Netherlands Antillean guilder",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "AOA",
            "description": "Angolan kwanza",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ARS",
            "description": "Argentine peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "AUD",
            "description": "Australian dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "AWG",
            "description": "Aruban florin",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "AZN",
            "description": "Azerbaijani manat",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BAM",
            "description": "Bosnia and Herzegovina convertible mark",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BBD",
            "description": "Barbados dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BDT",
            "description": "Bangladeshi taka",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BGN",
            "description": "Bulgarian lev",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BHD",
            "description": "Bahraini dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BIF",
            "description": "Burundian franc",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BMD",
            "description": "Bermudian dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BND",
            "description": "Brunei dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BOB",
            "description": "Boliviano",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BRL",
            "description": "Brazilian real",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BSD",
            "description": "Bahamian dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BTN",
            "description": "Bhutanese ngultrum",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BWP",
            "description": "Botswana pula",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BYN",
            "description": "Belarusian ruble",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BZD",
            "description": "Belize dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CAD",
            "description": "Canadian dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CDF",
            "description": "Congolese franc",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CHF",
            "description": "Swiss franc",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CLP",
            "description": "Chilean peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CNY",
            "description": "Renminbi (Chinese) yuan",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "COP",
            "description": "Colombian peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CRC",
            "description": "Costa Rican colon",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUC",
            "description": "Cuban convertible peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUP",
            "description": "Cuban peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CVE",
            "description": "Cape Verde escudo",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CZK",
            "description": "Czech koruna",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DJF",
            "description": "Djiboutian franc",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DKK",
            "description": "Danish krone",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DOP",
            "description": "Dominican peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DZD",
            "description": "Algerian dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "EGP",
            "description": "Egyptian pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ERN",
            "description": "Eritrean nakfa",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ETB",
            "description": "Ethiopian birr",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "EUR",
            "description": "Euro",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FJD",
            "description": "Fiji dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FKP",
            "description": "Falkland Islands pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GBP",
            "description": "Pound sterling",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GEL",
            "description": "Georgian lari",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GHS",
            "description": "Ghanaian cedi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GIP",
            "description": "Gibraltar pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GMD",
            "description": "Gambian dalasi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GNF",
            "description": "Guinean franc",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GTQ",
            "description": "Guatemalan quetzal",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "GYD",
            "description": "Guyanese dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "HKD",
            "description": "Hong Kong dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "HNL",
            "description": "Honduran lempira",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "HRK",
            "description": "Croatian kuna",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "HTG",
            "description": "Haitian gourde",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "HUF",
            "description": "Hungarian forint",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "IDR",
            "description": "Indonesian rupiah",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ILS",
            "description": "Israeli new shekel",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INR",
            "description": "Indian rupee",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "IQD",
            "description": "Iraqi dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "IRR",
            "description": "Iranian rial",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ISK",
            "description": "Icelandic króna",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "JMD",
            "description": "Jamaican dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "JOD",
            "description": "Jordanian dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "JPY",
            "description": "Japanese yen",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KES",
            "description": "Kenyan shilling",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KGS",
            "description": "Kyrgyzstani som",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KHR",
            "description": "Cambodian riel",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KMF",
            "description": "Comoro franc",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KPW",
            "description": "North Korean won",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KRW",
            "description": "South Korean won",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KWD",
            "description": "Kuwaiti dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KYD",
            "description": "Cayman Islands dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "KZT",
            "description": "Kazakhstani tenge",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LAK",
            "description": "Lao kip",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LBP",
            "description": "Lebanese pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LKR",
            "description": "Sri Lankan rupee",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LRD",
            "description": "Liberian dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LSL",
            "description": "Lesotho loti",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LYD",
            "description": "Libyan dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MAD",
            "description": "Moroccan dirham",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MDL",
            "description": "Moldovan leu",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MGA",
            "description": "Malagasy ariary",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MKD",
            "description": "Macedonian denar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MMK",
            "description": "Myanmar kyat",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MNT",
            "description": "Mongolian tögrög",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MOP",
            "description": "Macanese pataca",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MRU",
            "description": "Mauritanian ouguiya",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MUR",
            "description": "Mauritian rupee",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MVR",
            "description": "Maldivian rufiyaa",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MWK",
            "description": "Malawian kwacha",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MXN",
            "description": "Mexican peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MYR",
            "description": "Malaysian ringgit",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MZN",
            "description": "Mozambican metical",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NAD",
            "description": "Namibian dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NGN",
            "description": "Nigerian naira",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NIO",
            "description": "Nicaraguan córdoba",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NOK",
            "description": "Norwegian krone",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NPR",
            "description": "Nepalese rupee",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NZD",
            "description": "New Zealand dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OMR",
            "description": "Omani rial",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PAB",
            "description": "Panamanian balboa",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PEN",
            "description": "Peruvian sol",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PGK",
            "description": "Papua New Guinean kina",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PHP",
            "description": "Philippine peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PKR",
            "description": "Pakistani rupee",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PLN",
            "description": "Polish złoty",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PYG",
            "description": "Paraguayan guaraní",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "QAR",
            "description": "Qatari riyal",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "RON",
            "description": "Romanian leu",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "RSD",
            "description": "Serbian dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "RUB",
            "description": "Russian ruble",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "RWF",
            "description": "Rwandan franc",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SAR",
            "description": "Saudi riyal",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SBD",
            "description": "Solomon Islands dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCR",
            "description": "Seychelles rupee",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SDG",
            "description": "Sudanese pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SEK",
            "description": "Swedish krona/kronor",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SGD",
            "description": "Singapore dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SHP",
            "description": "Saint Helena pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SLL",
            "description": "Sierra Leonean leone",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SOS",
            "description": "Somali shilling",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SRD",
            "description": "Surinamese dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SSP",
            "description": "South Sudanese pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "STN",
            "description": "São Tomé and Príncipe dobra",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SVC",
            "description": "Salvadoran colón",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SYP",
            "description": "Syrian pound",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SZL",
            "description": "Swazi lilangeni",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "THB",
            "description": "Thai baht",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TJS",
            "description": "Tajikistani somoni",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TMT",
            "description": "Turkmenistan manat",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TND",
            "description": "Tunisian dinar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TOP",
            "description": "Tongan paʻanga",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TRY",
            "description": "Turkish lira",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TTD",
            "description": "Trinidad and Tobago dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TWD",
            "description": "New Taiwan dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "TZS",
            "description": "Tanzanian shilling",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UAH",
            "description": "Ukrainian hryvnia",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UGX",
            "description": "Ugandan shilling",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "USD",
            "description": "United States dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UYU",
            "description": "Uruguayan peso",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UZS",
            "description": "Uzbekistan som",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VES",
            "description": "Venezuelan bolívar soberano",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VND",
            "description": "Vietnamese đồng",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VUV",
            "description": "Vanuatu vatu",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "WST",
            "description": "Samoan tala",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "XAF",
            "description": "CFA franc BEAC",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "XCD",
            "description": "East Caribbean dollar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "XOF",
            "description": "CFA franc BCEAO",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "XPF",
            "description": "CFP franc (franc Pacifique)",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "YER",
            "description": "Yemeni rial",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ZAR",
            "description": "South African rand",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ZMW",
            "description": "Zambian kwacha",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ZWL",
            "description": "Zimbabwean dollar",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "CustomField",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "StringCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "LocaleStringCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IntCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FloatCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "BooleanCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "DateTimeCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "RelationCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TextCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "LocaleTextCustomFieldConfig",
            "ofType": null
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "StringCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "length",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pattern",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "options",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StringFieldOption",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "StringFieldOption",
        "description": null,
        "fields": [
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "LocaleStringCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "length",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pattern",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "IntCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "min",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "max",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "step",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FloatCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "min",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "max",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "step",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "BooleanCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DateTimeCustomFieldConfig",
        "description": "Expects the same validation formats as the `<input type=\"datetime-local\">` HTML element.\nSee https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "min",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "max",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "step",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "RelationCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "entity",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "scalarFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TextCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "LocaleTextCustomFieldConfig",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "list",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "label",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LocalizedString",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "readonly",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nullable",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ui",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "CustomField",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "LocalizedString",
        "description": null,
        "fields": [
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "CustomFieldConfig",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "StringCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "LocaleStringCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IntCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FloatCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "BooleanCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "DateTimeCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "RelationCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TextCustomFieldConfig",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "LocaleTextCustomFieldConfig",
            "ofType": null
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerGroup",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customers",
            "description": null,
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CustomerSortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CustomerFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Customer",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "firstName",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lastName",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "emailAddress",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "addresses",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Address",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "orders",
            "description": null,
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "OrderListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "user",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CustomerList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Customer",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacetValue",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facet",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Facet",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facetId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValueTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacetValueTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Facet",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "values",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "valueList",
            "description": "Returns a paginated, sortable, filterable list of the Facet's values. Added in v2.1.0.",
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FacetValueListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetValueList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacetTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacetList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Facet",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetValueSortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetValueFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacetValueList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "HistoryEntry",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "HistoryEntryType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "data",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "HistoryEntryType",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "CUSTOMER_REGISTERED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_VERIFIED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_DETAIL_UPDATED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_ADDED_TO_GROUP",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_REMOVED_FROM_GROUP",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_ADDRESS_CREATED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_ADDRESS_UPDATED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_ADDRESS_DELETED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_PASSWORD_UPDATED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_PASSWORD_RESET_REQUESTED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_PASSWORD_RESET_VERIFIED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_EMAIL_UPDATE_REQUESTED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_EMAIL_UPDATE_VERIFIED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "CUSTOMER_NOTE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_STATE_TRANSITION",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_PAYMENT_TRANSITION",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_FULFILLMENT",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_CANCELLATION",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_REFUND_TRANSITION",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_FULFILLMENT_TRANSITION",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_NOTE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_COUPON_APPLIED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_COUPON_REMOVED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ORDER_MODIFIED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "HistoryEntryList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "HistoryEntry",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HistoryEntryListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "HistoryEntrySortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "HistoryEntryFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "LanguageCode",
        "description": "@description\nLanguages in the form of a ISO 639-1 language code with optional\nregion or script modifier (e.g. de_AT). The selection available is based\non the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)\nand includes the major spoken languages of the world and any widely-used variants.\n\n@docsCategory common",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "af",
            "description": "Afrikaans",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ak",
            "description": "Akan",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sq",
            "description": "Albanian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "am",
            "description": "Amharic",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ar",
            "description": "Arabic",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hy",
            "description": "Armenian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "as",
            "description": "Assamese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "az",
            "description": "Azerbaijani",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bm",
            "description": "Bambara",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bn",
            "description": "Bangla",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eu",
            "description": "Basque",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "be",
            "description": "Belarusian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bs",
            "description": "Bosnian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "br",
            "description": "Breton",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bg",
            "description": "Bulgarian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "my",
            "description": "Burmese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ca",
            "description": "Catalan",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ce",
            "description": "Chechen",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "zh",
            "description": "Chinese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "zh_Hans",
            "description": "Simplified Chinese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "zh_Hant",
            "description": "Traditional Chinese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cu",
            "description": "Church Slavic",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "kw",
            "description": "Cornish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "co",
            "description": "Corsican",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hr",
            "description": "Croatian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cs",
            "description": "Czech",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "da",
            "description": "Danish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nl",
            "description": "Dutch",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nl_BE",
            "description": "Flemish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dz",
            "description": "Dzongkha",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "en",
            "description": "English",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "en_AU",
            "description": "Australian English",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "en_CA",
            "description": "Canadian English",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "en_GB",
            "description": "British English",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "en_US",
            "description": "American English",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eo",
            "description": "Esperanto",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "et",
            "description": "Estonian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ee",
            "description": "Ewe",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fo",
            "description": "Faroese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fi",
            "description": "Finnish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fr",
            "description": "French",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fr_CA",
            "description": "Canadian French",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fr_CH",
            "description": "Swiss French",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ff",
            "description": "Fulah",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "gl",
            "description": "Galician",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lg",
            "description": "Ganda",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ka",
            "description": "Georgian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "de",
            "description": "German",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "de_AT",
            "description": "Austrian German",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "de_CH",
            "description": "Swiss High German",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "el",
            "description": "Greek",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "gu",
            "description": "Gujarati",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ht",
            "description": "Haitian Creole",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ha",
            "description": "Hausa",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "he",
            "description": "Hebrew",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hi",
            "description": "Hindi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hu",
            "description": "Hungarian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "is",
            "description": "Icelandic",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ig",
            "description": "Igbo",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "id",
            "description": "Indonesian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ia",
            "description": "Interlingua",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ga",
            "description": "Irish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "it",
            "description": "Italian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ja",
            "description": "Japanese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "jv",
            "description": "Javanese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "kl",
            "description": "Kalaallisut",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "kn",
            "description": "Kannada",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ks",
            "description": "Kashmiri",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "kk",
            "description": "Kazakh",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "km",
            "description": "Khmer",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ki",
            "description": "Kikuyu",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "rw",
            "description": "Kinyarwanda",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ko",
            "description": "Korean",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ku",
            "description": "Kurdish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ky",
            "description": "Kyrgyz",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lo",
            "description": "Lao",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "la",
            "description": "Latin",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lv",
            "description": "Latvian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ln",
            "description": "Lingala",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lt",
            "description": "Lithuanian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lu",
            "description": "Luba-Katanga",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lb",
            "description": "Luxembourgish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mk",
            "description": "Macedonian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mg",
            "description": "Malagasy",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ms",
            "description": "Malay",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ml",
            "description": "Malayalam",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mt",
            "description": "Maltese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "gv",
            "description": "Manx",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mi",
            "description": "Maori",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mr",
            "description": "Marathi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mn",
            "description": "Mongolian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ne",
            "description": "Nepali",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nd",
            "description": "North Ndebele",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "se",
            "description": "Northern Sami",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nb",
            "description": "Norwegian Bokmål",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nn",
            "description": "Norwegian Nynorsk",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ny",
            "description": "Nyanja",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "or",
            "description": "Odia",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "om",
            "description": "Oromo",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "os",
            "description": "Ossetic",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ps",
            "description": "Pashto",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fa",
            "description": "Persian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fa_AF",
            "description": "Dari",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pl",
            "description": "Polish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pt",
            "description": "Portuguese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pt_BR",
            "description": "Brazilian Portuguese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pt_PT",
            "description": "European Portuguese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pa",
            "description": "Punjabi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "qu",
            "description": "Quechua",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ro",
            "description": "Romanian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ro_MD",
            "description": "Moldavian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "rm",
            "description": "Romansh",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "rn",
            "description": "Rundi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ru",
            "description": "Russian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sm",
            "description": "Samoan",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sg",
            "description": "Sango",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sa",
            "description": "Sanskrit",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "gd",
            "description": "Scottish Gaelic",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sr",
            "description": "Serbian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sn",
            "description": "Shona",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ii",
            "description": "Sichuan Yi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sd",
            "description": "Sindhi",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "si",
            "description": "Sinhala",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sk",
            "description": "Slovak",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sl",
            "description": "Slovenian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "so",
            "description": "Somali",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "st",
            "description": "Southern Sotho",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "es",
            "description": "Spanish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "es_ES",
            "description": "European Spanish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "es_MX",
            "description": "Mexican Spanish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "su",
            "description": "Sundanese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sw",
            "description": "Swahili",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sw_CD",
            "description": "Congo Swahili",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sv",
            "description": "Swedish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "tg",
            "description": "Tajik",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ta",
            "description": "Tamil",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "tt",
            "description": "Tatar",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "te",
            "description": "Telugu",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "th",
            "description": "Thai",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bo",
            "description": "Tibetan",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ti",
            "description": "Tigrinya",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "to",
            "description": "Tongan",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "tr",
            "description": "Turkish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "tk",
            "description": "Turkmen",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uk",
            "description": "Ukrainian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ur",
            "description": "Urdu",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ug",
            "description": "Uyghur",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uz",
            "description": "Uzbek",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "vi",
            "description": "Vietnamese",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "vo",
            "description": "Volapük",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cy",
            "description": "Welsh",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fy",
            "description": "Western Frisian",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "wo",
            "description": "Wolof",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "xh",
            "description": "Xhosa",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "yi",
            "description": "Yiddish",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "yo",
            "description": "Yoruba",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "zu",
            "description": "Zulu",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "OrderType",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "Regular",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "Seller",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "Aggregate",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Order",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "OrderType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "orderPlacedAt",
            "description": "The date & time that the Order was placed, i.e. the Customer\ncompleted the checkout and the Order is no longer \"active\"",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": "A unique code for the Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "state",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "active",
            "description": "An order is active as long as the payment process has not been completed",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customer",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shippingAddress",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "OrderAddress",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "billingAddress",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "OrderAddress",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lines",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderLine",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "surcharges",
            "description": "Surcharges are arbitrary modifications to the Order total which are neither\nProductVariants nor discounts resulting from applied Promotions. For example,\none-off discounts based on customer interaction, or surcharges based on payment\nmethods.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Surcharge",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discounts",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Discount",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "couponCodes",
            "description": "An array of all coupon codes applied to the Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "promotions",
            "description": "Promotions applied to the order. Only gets populated after the payment process has completed.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Promotion",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "payments",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Payment",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fulfillments",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Fulfillment",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalQuantity",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subTotal",
            "description": "The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level\ndiscounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.\nTo get a total of all OrderLines which does not account for prorated discounts, use the\nsum of `OrderLine.discountedLinePrice` values.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subTotalWithTax",
            "description": "Same as subTotal, but inclusive of tax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currencyCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shippingLines",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingLine",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shipping",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shippingWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "total",
            "description": "Equal to subTotal plus shipping",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalWithTax",
            "description": "The final payable amount. Equal to subTotalWithTax plus shippingWithTax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxSummary",
            "description": "A summary of the taxes being applied to this Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderTaxSummary",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "history",
            "description": null,
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "HistoryEntryListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "HistoryEntryList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderTaxSummary",
        "description": "A summary of the taxes being applied to this order, grouped\nby taxRate.",
        "fields": [
          {
            "name": "description",
            "description": "A description of this tax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxRate",
            "description": "The taxRate as a percentage",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxBase",
            "description": "The total net price of OrderLines to which this taxRate applies",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxTotal",
            "description": "The total tax being applied to the Order at this taxRate",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderAddress",
        "description": null,
        "fields": [
          {
            "name": "fullName",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "company",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "streetLine1",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "streetLine2",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "province",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postalCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "country",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "countryCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Order",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ShippingLine",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shippingMethod",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ShippingMethod",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "price",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "priceWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discountedPrice",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discountedPriceWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discounts",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Discount",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Discount",
        "description": null,
        "fields": [
          {
            "name": "adjustmentSource",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "AdjustmentType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "amount",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "amountWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderLine",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productVariant",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariant",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "featuredAsset",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unitPrice",
            "description": "The price of a single unit, excluding tax and discounts",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unitPriceWithTax",
            "description": "The price of a single unit, including tax but excluding discounts",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unitPriceChangeSinceAdded",
            "description": "Non-zero if the unitPrice has changed since it was initially added to Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unitPriceWithTaxChangeSinceAdded",
            "description": "Non-zero if the unitPriceWithTax has changed since it was initially added to Order",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discountedUnitPrice",
            "description": "The price of a single unit including discounts, excluding tax.\n\nIf Order-level discounts have been applied, this will not be the\nactual taxable unit price (see `proratedUnitPrice`), but is generally the\ncorrect price to display to customers to avoid confusion\nabout the internal handling of distributed Order-level discounts.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discountedUnitPriceWithTax",
            "description": "The price of a single unit including discounts and tax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "proratedUnitPrice",
            "description": "The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)\nOrder-level discounts. This value is the true economic value of the OrderItem, and is used in tax\nand refund calculations.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "proratedUnitPriceWithTax",
            "description": "The proratedUnitPrice including tax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "quantity",
            "description": "The quantity of items purchased",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "orderPlacedQuantity",
            "description": "The quantity at the time the Order was placed",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxRate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "linePrice",
            "description": "The total price of the line excluding tax and discounts.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "linePriceWithTax",
            "description": "The total price of the line including tax but excluding discounts.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discountedLinePrice",
            "description": "The price of the line including discounts, excluding tax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discountedLinePriceWithTax",
            "description": "The price of the line including discounts and tax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "proratedLinePrice",
            "description": "The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)\nOrder-level discounts. This value is the true economic value of the OrderLine, and is used in tax\nand refund calculations.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "proratedLinePriceWithTax",
            "description": "The proratedLinePrice including tax",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lineTax",
            "description": "The total tax on this line",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "discounts",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Discount",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxLines",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TaxLine",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "order",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Order",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fulfillmentLines",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "FulfillmentLine",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Payment",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "method",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "amount",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "state",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "transactionId",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "errorMessage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "refunds",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Refund",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "metadata",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "RefundLine",
        "description": null,
        "fields": [
          {
            "name": "orderLine",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderLine",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "orderLineId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "quantity",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "refund",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Refund",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "refundId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Refund",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shipping",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "adjustment",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "total",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "method",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "state",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "transactionId",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lines",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RefundLine",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "paymentId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "metadata",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FulfillmentLine",
        "description": null,
        "fields": [
          {
            "name": "orderLine",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderLine",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "orderLineId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "quantity",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fulfillment",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Fulfillment",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fulfillmentId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Fulfillment",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lines",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FulfillmentLine",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FulfillmentLine",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": true,
            "deprecationReason": "Use the `lines` field instead"
          },
          {
            "name": "state",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "method",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "trackingCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Surcharge",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sku",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxLines",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TaxLine",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "price",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "priceWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxRate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PaymentMethod",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enabled",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "checker",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "ConfigurableOperation",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "handler",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigurableOperation",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentMethodTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PaymentMethodTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductOptionGroup",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "options",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOption",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOptionGroupTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductOptionGroupTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductOption",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "groupId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "group",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductOptionGroup",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOptionTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductOptionTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SearchReindexResponse",
        "description": null,
        "fields": [
          {
            "name": "success",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SearchResponse",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SearchResult",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facetValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValueResult",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "collections",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CollectionResult",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacetValueResult",
        "description": "Which FacetValues are present in the products returned\nby the search, and in what quantity.",
        "fields": [
          {
            "name": "facetValue",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacetValue",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CollectionResult",
        "description": "Which Collections are present in the products returned\nby the search, and in what quantity.",
        "fields": [
          {
            "name": "collection",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Collection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SearchResultAsset",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "preview",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "focalPoint",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Coordinate",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SearchResult",
        "description": null,
        "fields": [
          {
            "name": "sku",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "slug",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productName",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productAsset",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "SearchResultAsset",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productVariantId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productVariantName",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productVariantAsset",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "SearchResultAsset",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "price",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "SearchResultPrice",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "priceWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "UNION",
                "name": "SearchResultPrice",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currencyCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facetIds",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facetValueIds",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "collectionIds",
            "description": "An array of ids of the Collections in which this result appears",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "score",
            "description": "A relevance score for the result. Differs between database implementations",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "SearchResultPrice",
        "description": "The price of a search result product, either as a range or as a single price",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "PriceRange",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "SinglePrice",
            "ofType": null
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SinglePrice",
        "description": "The price value where the result has a single price",
        "fields": [
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PriceRange",
        "description": "The price range where the result has more than one price",
        "fields": [
          {
            "name": "min",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "max",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "slug",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "featuredAsset",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "assets",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "variants",
            "description": "Returns all ProductVariants",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariant",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "variantList",
            "description": "Returns a paginated, sortable, filterable list of ProductVariants",
            "args": [
              {
                "name": "options",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProductVariantListOptions",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantList",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "optionGroups",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOptionGroup",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facetValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "collections",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Collection",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "slug",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariant",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariant",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "product",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "productId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sku",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "featuredAsset",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "assets",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "price",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currencyCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "CurrencyCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "priceWithTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Money",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "stockLevel",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxRateApplied",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxRate",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "taxCategory",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxCategory",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "options",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductOption",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facetValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FacetValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Promotion",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startsAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endsAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "couponCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "perCustomerUsageLimit",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "usageLimit",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enabled",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "conditions",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "actions",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigurableOperation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PromotionTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PromotionTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PromotionList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Promotion",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "Region",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enabled",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parent",
            "description": null,
            "args": [],
            "type": {
              "kind": "INTERFACE",
              "name": "Region",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parentId",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RegionTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Country",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Province",
            "ofType": null
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RegionTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Country",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enabled",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parent",
            "description": null,
            "args": [],
            "type": {
              "kind": "INTERFACE",
              "name": "Region",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parentId",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RegionTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Region",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CountryList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Country",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Province",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enabled",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parent",
            "description": null,
            "args": [],
            "type": {
              "kind": "INTERFACE",
              "name": "Region",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parentId",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RegionTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Region",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ProvinceList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Province",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Role",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "permissions",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "Permission",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channels",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Channel",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "RoleList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Role",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Seller",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethod",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fulfillmentHandlerCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "checker",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigurableOperation",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "calculator",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigurableOperation",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "translations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingMethodTranslation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethodTranslation",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "languageCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "LanguageCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ShippingMethodList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShippingMethod",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Tag",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Tag",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TaxCategory",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDefault",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TaxRate",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enabled",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "category",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TaxCategory",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "zone",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Zone",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customerGroup",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "CustomerGroup",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TaxRateList",
        "description": null,
        "fields": [
          {
            "name": "items",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TaxRate",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalItems",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "PaginatedList",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "identifier",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "verified",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "roles",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Role",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lastLogin",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "authenticationMethods",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AuthenticationMethod",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AuthenticationMethod",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "strategy",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Zone",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "members",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Region",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "OrderPaymentStateError",
        "description": "Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "IneligiblePaymentMethodError",
        "description": "Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eligibilityCheckerMessage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PaymentFailedError",
        "description": "Returned when a Payment fails due to an error.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "paymentErrorMessage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PaymentDeclinedError",
        "description": "Returned when a Payment is declined by the payment provider.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "paymentErrorMessage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AlreadyLoggedInError",
        "description": "Returned when attempting to set the Customer for an Order when already logged in.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "MissingPasswordError",
        "description": "Returned when attempting to register or verify a customer account without a password, when one is required.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PasswordValidationError",
        "description": "Returned when attempting to register or verify a customer account where the given password fails password validation.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "validationErrorMessage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PasswordAlreadySetError",
        "description": "Returned when attempting to verify a customer account with a password, when a password has already been set.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "VerificationTokenInvalidError",
        "description": "Returned if the verification token (used to verify a Customer's email address) is either\ninvalid or does not match any expected tokens.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "VerificationTokenExpiredError",
        "description": "Returned if the verification token (used to verify a Customer's email address) is valid, but has\nexpired according to the `verificationTokenDuration` setting in the AuthOptions.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "IdentifierChangeTokenInvalidError",
        "description": "Returned if the token used to change a Customer's email address is either\ninvalid or does not match any expected tokens.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "IdentifierChangeTokenExpiredError",
        "description": "Returned if the token used to change a Customer's email address is valid, but has\nexpired according to the `verificationTokenDuration` setting in the AuthOptions.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PasswordResetTokenInvalidError",
        "description": "Returned if the token used to reset a Customer's password is either\ninvalid or does not match any expected tokens.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PasswordResetTokenExpiredError",
        "description": "Returned if the token used to reset a Customer's password is valid, but has\nexpired according to the `verificationTokenDuration` setting in the AuthOptions.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "NotVerifiedError",
        "description": "Returned if `authOptions.requireVerification` is set to `true` (which is the default)\nand an unverified user attempts to authenticate.",
        "fields": [
          {
            "name": "errorCode",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ErrorCode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ErrorResult",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AuthenticationInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "native",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NativeAuthInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RegisterCustomerInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "emailAddress",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "password",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateCustomerInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "customFields",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateOrderInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "customFields",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaymentInput",
        "description": "Passed as input to the `addPaymentToOrder` mutation.",
        "fields": null,
        "inputFields": [
          {
            "name": "method",
            "description": "This field should correspond to the `code` property of a PaymentMethod.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "metadata",
            "description": "This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method\nas the \"metadata\" argument. For example, it could contain an ID for the payment and other\ndata generated by the payment provider.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CollectionListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "topLevelOnly",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CollectionSortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CollectionFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetSortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FacetFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OrderListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "OrderSortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "OrderFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductSortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantListOptions",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "skip",
            "description": "Skips the first n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "take",
            "description": "Takes n results, for use in pagination",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sort",
            "description": "Specifies which properties to sort the results by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductVariantSortParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filter",
            "description": "Allows the results to be filtered",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProductVariantFilterParameter",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "filterOperator",
            "description": "Specifies whether multiple \"filter\" arguments should be combines with a logical AND or OR operation. Defaults to AND.",
            "type": {
              "kind": "ENUM",
              "name": "LogicalOperator",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "AddPaymentToOrderResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderPaymentStateError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IneligiblePaymentMethodError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PaymentFailedError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PaymentDeclinedError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "TransitionOrderToStateResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "OrderStateTransitionError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetCustomerForOrderResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AlreadyLoggedInError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "GuestCheckoutError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RegisterCustomerAccountResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Success",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "MissingPasswordError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RefreshCustomerVerificationResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Success",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "VerifyCustomerAccountResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "VerificationTokenExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "MissingPasswordError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordAlreadySetError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateCustomerPasswordResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Success",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RequestUpdateCustomerEmailAddressResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Success",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "EmailAddressConflictError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateCustomerEmailAddressResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Success",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "IdentifierChangeTokenExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RequestPasswordResetResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Success",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ResetPasswordResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenInvalidError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordResetTokenExpiredError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PasswordValidationError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "NativeAuthenticationResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NativeAuthStrategyError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "AuthenticationResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CurrentUser",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InvalidCredentialsError",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NotVerifiedError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ActiveOrderResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Order",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "NoActiveOrderError",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "productId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "languageCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sku",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "price",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "currencyCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "priceWithTax",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "stockLevel",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductVariantSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "productId",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "sku",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "price",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "priceWithTax",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "stockLevel",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "emailAddress",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CustomerSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "firstName",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "lastName",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "phoneNumber",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "emailAddress",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OrderFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "orderPlacedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "code",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "state",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "active",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "totalQuantity",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subTotal",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subTotalWithTax",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "currencyCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "shipping",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "shippingWithTax",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "total",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "totalWithTax",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OrderSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "orderPlacedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "code",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "state",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "totalQuantity",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subTotal",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subTotalWithTax",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "shipping",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "shippingWithTax",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "total",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "totalWithTax",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "languageCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "facetId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "code",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetValueSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "facetId",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "code",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HistoryEntryFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HistoryEntrySortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CollectionFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "languageCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "slug",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "position",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "parentId",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CollectionSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "slug",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "position",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "parentId",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "languageCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "code",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FacetSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "code",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductFilterParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "languageCode",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "slug",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringOperators",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProductSortParameter",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "createdAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "slug",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NativeAuthInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "username",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "password",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Schema",
        "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
        "fields": [
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "types",
            "description": "A list of all types supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "queryType",
            "description": "The type that query operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mutationType",
            "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscriptionType",
            "description": "If this server support subscription, the type that subscription operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "directives",
            "description": "A list of all directives supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Directive",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Type",
        "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        "fields": [
          {
            "name": "kind",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "__TypeKind",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "specifiedByUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fields",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Field",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "interfaces",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "possibleTypes",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enumValues",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__EnumValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inputFields",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__InputValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ofType",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__TypeKind",
        "description": "An enum describing what kind of type a given `__Type` is.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "SCALAR",
            "description": "Indicates this type is a scalar.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Indicates this type is an enum. `enumValues` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Indicates this type is an input object. `inputFields` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LIST",
            "description": "Indicates this type is a list. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NON_NULL",
            "description": "Indicates this type is a non-null. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Field",
        "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__InputValue",
        "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultValue",
            "description": "A GraphQL-formatted string representing the default value for this input value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Directive",
        "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isRepeatable",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "locations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__DirectiveLocation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "QUERY",
            "description": "Location adjacent to a query operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MUTATION",
            "description": "Location adjacent to a mutation operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SUBSCRIPTION",
            "description": "Location adjacent to a subscription operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD",
            "description": "Location adjacent to a field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_DEFINITION",
            "description": "Location adjacent to a fragment definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_SPREAD",
            "description": "Location adjacent to a fragment spread.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INLINE_FRAGMENT",
            "description": "Location adjacent to an inline fragment.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VARIABLE_DEFINITION",
            "description": "Location adjacent to a variable definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCHEMA",
            "description": "Location adjacent to a schema definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCALAR",
            "description": "Location adjacent to a scalar definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Location adjacent to an object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD_DEFINITION",
            "description": "Location adjacent to a field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ARGUMENT_DEFINITION",
            "description": "Location adjacent to an argument definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Location adjacent to an interface definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Location adjacent to a union definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Location adjacent to an enum definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM_VALUE",
            "description": "Location adjacent to an enum value definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Location adjacent to an input object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_FIELD_DEFINITION",
            "description": "Location adjacent to an input object field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      }
    ],
    "directives": [
      {
        "name": "include",
        "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Included when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ]
      },
      {
        "name": "skip",
        "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Skipped when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ]
      },
      {
        "name": "deprecated",
        "description": "Marks an element of a GraphQL schema as no longer supported.",
        "locations": [
          "FIELD_DEFINITION",
          "ARGUMENT_DEFINITION",
          "INPUT_FIELD_DEFINITION",
          "ENUM_VALUE"
        ],
        "args": [
          {
            "name": "reason",
            "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": "\"No longer supported\""
          }
        ]
      },
      {
        "name": "specifiedBy",
        "description": "Exposes a URL that specifies the behaviour of this scalar.",
        "locations": [
          "SCALAR"
        ],
        "args": [
          {
            "name": "url",
            "description": "The URL that specifies the behaviour of this scalar.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ]
      }
    ]
  }
}