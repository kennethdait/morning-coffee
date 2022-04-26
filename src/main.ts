/**
 * main.ts
 * morning-coffee
 */

function isItTimeForMorningCoffee() {
    // const scriptProperties = PropertiesService.getScriptProperties()
    // console.log(JSON.stringify(scriptProperties,null,2))
    const arr:string[] = ['one', 'two', 'three']
    if (arr instanceof Array) {
        console.log(`${arr.length}, ${arr}`)
    }
    return arr
    // for (key of ScriptProperties.getKeys()) {
    //   console.log(`${key} -> ${ScriptProperties.getProperty(key)}`)
    // }
}