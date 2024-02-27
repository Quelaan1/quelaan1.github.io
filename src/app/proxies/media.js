import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}