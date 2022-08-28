const { functions, isFunction } = require('lodash');
const RegisterModel = require('../models/RegisterModel');

// function checkname() {
//     var anUpperCase = /[A-Z]/;
//     var aLowerCase = /[a-z]/;
//     var obj = {};
//     obj.result = true;

//     if(p.length < 8){
//         obj.result=false;
//         obj.error="Not long enough!"
//         return obj;
//     }

//     var numUpper = 0;
//     var numLower = 0;
//     var numNums = 0;
//     var numSpecials = 0;
//     for(var i=0; i<p.length; i++){
//         if(anUpperCase.test(p[i]))
//             numUpper++;
//         else if(aLowerCase.test(p[i]))
//             numLower++;
//         else if(aNumber.test(p[i]))
//             numNums++;
//         else if(aSpecial.test(p[i]))
//             numSpecials++;
//     }

//     if(numUpper < 1 || numLower < 1 || numNums < 1 || numSpecials < 1){
//         obj.result=false;
//         obj.error="Wrong Format!";
//         return obj;
//     }
//     return obj;
// }

const register = async(req, res, next) => {
    try {
        const {nickname} = req.body;
        if(!nickname) {
            return res.status(422). send({
                error: true,
                message: 'لطفا نام خود را وارد کنید.'
            })
        }

        const isExistNickname = await RegisterModel.findOne({nickname})

        if(!isExistNickname) {
            return res.status(422).send({
                error: true,
                message: 'کاربری با این نام قبلا ثبت نام کرده است.'
            })
        }

        }catch (error) {
             next(error)
    }
}

const registerController = mongoose.model('register', userSchema)
module.exports ={
    register,
}