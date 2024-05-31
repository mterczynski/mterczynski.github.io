// 4th approach: builder class + class with parameter properties
class CarBuilder {
    private color?: string;
    private weight?: number;
    private price?: number;
    private brand?: string;
    private productionYear?: number;

    public setColor(color: string) {
        this.color = color;
        return this;
    }

    public setWeight(weight: number) {
        this.weight = weight;
        return this;
    }

    public setPrice(price: number) {
        this.price = price;
        return this;
    }

    public setBrand(brand: string) {
        this.brand = brand;
        return this;
    }

    public setProductionYear(productionYear: number) {
        this.productionYear = productionYear;
        return this;
    }

    public build() {
        if (this.weight === undefined) throw new Error("The weight parameter is required");
        if (this.price === undefined) throw new Error("The price parameter is required");
        if (this.brand === undefined) throw new Error("The brand parameter is required");
        if (this.productionYear === undefined) throw new Error("The productionYear parameter is required");

        return new Car(
            this.weight,
            this.price,
            this.brand,
            this.productionYear,
            this.color
        );
    }
}

// the exact same class from 2nd example:
class Car {
    constructor(
        private weight: number,
        private price: number,
        private brand: string,
        private productionYear: number,
        private color: string = "red"
    ) { }

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

const carBuilder = new CarBuilder();
carBuilder.setWeight(2_000);
carBuilder.setBrand("Ford");
carBuilder.setPrice(50_000);
carBuilder.setProductionYear(2013);
const car = carBuilder.build();

console.log(car.getColor()); // red