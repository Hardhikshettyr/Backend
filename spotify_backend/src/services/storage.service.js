const Imagekit=require("@imagekit/nodejs");
const imagekit=new Imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadfile(file){
    const result=await imagekit.files.upload({
        
    })
}