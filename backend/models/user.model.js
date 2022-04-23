const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true
        },
        verifyEmail: {
            type: {
                isVerified: Boolean,
                token: String
            },
            default: {
                isVerified: false,
                token: ""
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        phone: {
            type: String,
            default: ""
        },
        verifyPhone: {
            type: {
                isVerified: Boolean,
                token: String
            },
            default: {
                isVerified: false,
                token: ""
            }
        },
        bundle: {
            type: String,
            default: ""
        },
        facturation: {
            type: String,
            default: ""
        },
        paymentInformation: {
            type: Object,
            default: null
        },
        secondaryPaymentInformation: {
            type: Object,
            default: null
        },
        profiles: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true
    }
);

// play function before save into display: 'block',
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  };
  
  const UserModel = mongoose.model("user", userSchema);
  
  module.exports = UserModel;