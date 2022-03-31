
export class LibrarySectionModel{
    img: string;
    name: string;
    description: string;
    libcolor: string;
    btext: string;

    constructor(img: string, name:string, description:string, libcolor:string , btext:string) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.libcolor = libcolor;
        this.btext = btext;
    }

}