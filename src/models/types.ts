export interface IRegister {
  firstname: String,
  lastname: String,
  email: String,
  phonenumber: String,
  password: String,
}

export interface ILogin {
  email: String,
  password: String
}

export interface IAdmin {
  email: String,
  password: String
}
export interface IProducts {
  productInfo: any;
  totalPrice: any;
}

export interface IProductsArr {
  products: IProducts[];
}

export interface IFavouriteProducts {
  name: String;
  brand: String;
  price: String;
  rating: String;
  date: String;
  image: String;
  productType: String;
  index : Number
}
export interface IFavouriteProductsArr {
  favourites: IFavouriteProducts[];
}