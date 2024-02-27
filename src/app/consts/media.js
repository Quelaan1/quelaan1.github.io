import proxy from "../proxies/media"

const media = {
    github: "Quelaan1",
    email: "mailtotilakkumar@gmail.com"

}

export default new Proxy(media, proxy);

