// package.dto.ts

export class CreatePackageDto {
    weight: number;
    price: number;
    arrivalDate: Date;
    departureDate: Date;
    fragile: boolean;
    xDimension: number;
    yDimension: number;
    zDimension: number;
}