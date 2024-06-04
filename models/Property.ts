import {Schema, models, model} from 'mongoose';

const PropertySchema = new Schema({
    "owner": {
      "type": Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    "name": {
      "type": "String",
      required: true
    },
    "type": {
      "type": "String",
      required: true
    },
    "description": {
      "type": "String"
    },
    "location": {
      "street": {
        "type": "String"
      },
      "city": {
        "type": "String"
      },
      "state": {
        "type": "String"
      },
      "zipcode": {
        "type": "Date"
      }
    },
    "beds": {
      "type": "Number",
      required: true
    },
    "baths": {
      "type": "Number",
      required: true
    },
    "square_feet": {
      "type": "Number",
      required: true
    },
    "amenities": [
        {
            "type": "String"
        }
    ],
    "rates": {
        "nightly": {
            "type": "Number"
          },
      "weekly": {
        "type": "Number"
      },
      "monthly": {
        "type": "Number"
      }
    },
    "seller_info": {
      "name": {
        "type": "String"
      },
      "email": {
        "type": "String"
      },
      "phone": {
        "type": "String"
      }
    },
    "images": [
        {
            "type": "String"
        }
    ],
    "is_featured": {
      "type": "Boolean",
      default: false
    },
    "createdAt": {
      "type": "Date"
    },
    "updatedAt": {
      "type": "Date"
    }
  }, {
    timestamps: true
  });

  const Property = models.Property || model('PropertySChema', PropertySchema);

  export default Property;