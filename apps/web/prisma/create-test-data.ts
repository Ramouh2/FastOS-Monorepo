import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const user = await prisma.user.create({
    data:{
      id:"user-test",
      name:"Ramses",
      email:"test@fastos.com",
      password:"test123"
    }
  });


  const business = await prisma.business.create({
    data:{
      id:"business-test",
      userId:user.id,
      name:"FastOS Test Restaurant",
      status:"ACTIVE"
    }
  });


  console.log({
    user,
    business
  });

}


main()
.catch(console.error)
.finally(()=>{
  prisma.$disconnect();
});
