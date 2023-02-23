const mongoose = required ('mongoose');
// create schema to hold structuring of content

const Schema = mongoose.Schema;
const carSchema = new Schema({ 
make_model:{
    type: String,
    required : true,
},


price:{
    type:String,
    required: true,
},
year:{

    type:Number,
    required: true,

},
engine:{

    type: String,
    reqired: true
},



});


//export schema to be used in other files
module.exports = mongoose.model("VehicleInformation",carSchema);



