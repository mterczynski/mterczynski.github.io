// 1st example: basic class
class Car {
    private color: string;
    private weight: number;
    private price: number;
    private brand: string;
    private productionYear: number;

    constructor(
        weight: number,
        price: number,
        brand: string,
        productionYear: number,
        color: string = "red"
    ) {
        this.weight = weight;
        this.price = price;
        this.brand = brand;
        this.productionYear = productionYear;
        this.color = color;
    }

    public getWeight() {
        return this.weight;
    }

    public getPrice() {
        return this.price;
    }

    public getBrand() {
        return this.brand;
    }

    public getProductionYear() {
        return this.productionYear;
    }

    public getColor() {
        return this.color;
    }
}

const car = new Car(2_000, 50_000, "Ford", 2013);