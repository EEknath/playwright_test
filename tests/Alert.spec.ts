import test from "@playwright/test";


test.only("Prompt alert",async({page})=>{
page.on('dialog',alerttype=>{

   
const typeofalertmessage=alerttype.type()
 console.log("type of alert is:"+typeofalertmessage)
console.log(typeofalertmessage)
console.log('Message in the alert:"+ ${typeofalertmessage}')
alerttype.accept('Eknath')

if(typeofalertmessage==="propmt")
    alerttype.accept("Message entered")

else{
    alerttype.dismiss
}
})

await page.goto("https://www.leafground.com/alert.xhtml")
//simple alert 

await page.locator("//span[text()='Show']").nth(4).click();
await page.waitForTimeout(4000)


})