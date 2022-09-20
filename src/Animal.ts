abstract class Animal{
    public name: string;
    public lifetime: number;
    public size: number;
    public weight: number;

    constructor (name: string, lifeTime: number, size: number, weigth: number){
        this.name = name;
        this.lifetime = lifeTime;
        this.size = size ;
        this.weight = weigth;
    }
}
export {Animal};