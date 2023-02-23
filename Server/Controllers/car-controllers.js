const getAllCars = async (req,res,next) =>{
    let cars;
    try{
        cars = await Car.find();
    }catch(err){
        console.log(err)
    }
    if(!cars){
        // display negative http status if DB is empty
        return res.status(404).json({message:"No vehicles found"})
    }
    // display positive/good http request if able to fetch values from DB
    return res.status(200).json({cars});
};
const getByID = async (req,res,next) =>{
    const id = req.params.id;
    let car;
    try{
        car = await Car.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!car){
        return res.status(404).json({message: "No Vehicle Found!"})
    }
    return res.status(200).json({car})
};
const  addCar = async (req, res, next) =>{
    const{make_model, price, year, engine} = req.body;
    let vehicle;
    try{
        vehicle = new Car({
            make_model,
            price,
            year,
            engine
        });
        await vehicle.save();
    }
    catch(err){
        console.log(err);
    }
    if(!vehicle){
        return res.status(500).json({message : "Unable to Add Vehicle"});
    }
    return res.status(201).json({vehicle});
};
const updateCar = async (req,res,next) =>{
    const id = req.params.id;
    const {make_model, price, year, engine} = req.body;
    let car;
    try{
        car = await Car.findByIdAndUpdate(id,{
            make_model,
            price,
            year,
            engine
        });
        car = await car.save();
    }
    catch(err){
        console.log(err);
    }
    if(!car){
        return res.status(404).json({message: "Unable to update by this ID value"});
    }
    return res.status(200).json({car});
 };

 // delete a vehicle from DB by the way of its ID value

 const deleteCar = async (req,res,next) =>{
    const id = req.params.id;
    let car;
    try{

car = await Car.findByIdAndRemove(id);
    }catch(err){;
        console.log(err);
    }
    if(!car){
        return res.status(404).json({message: "Unable to update by this ID value"});
    }
    return res.status(200).json({message:"Vehicle Sucessfully Deleted"});

}

// export functions so that they can be assigned to router for URLS

exports.getAllCars = getAllCars;
exports.getByID =  getByID;
exports.addCar = addCar;
exports.updateCar = updateCar;
exports.sdeleteCar = deleteCar;






