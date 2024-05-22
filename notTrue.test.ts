import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()


async function seed() {
    const data = new Array(30)
        .fill(null).map((_, i) => ({
            bol: i % 3 === 0 ? true : i % 3 === 1 ? false : null,
        }))

    await prisma.test.createMany({
        data
    })
}


test('count not true boolean fields ', async () => {
    const count = await prisma.test.count()
    if (!count) {
        await seed()
    }
    console.log(' prisma.test', await prisma.test.findMany())
    const contNull = await prisma.test.count({where: {bol: null}})
    const contTrue = await prisma.test.count({where: {bol: true}})
    const contFalse = await prisma.test.count({where: {bol: false}})
    const contNotTrue = await prisma.test.count({where: {bol: {not: true}}})
    console.log('contNull', contNull)
    console.log('contTrue', contTrue)
    console.log('contFalse', contFalse)
    console.log('contNotTrue', contNotTrue)
    expect(contNotTrue).toBe(contNull + contFalse)
})

