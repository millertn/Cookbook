export class Recipe {
    public name:string;
    public description:string;
    public image:string;

    //TODO: eventually have this handle images from a server, not a static image path 

    constructor(name:string, desc:string, img:string) {
        this.name = name;
        this.description = desc;
        this.image = img;
    }
}
