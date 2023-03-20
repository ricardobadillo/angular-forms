// Modelos.
import { CountryNativeName } from './country-native-name';



export interface CountryName {
  common:     string;
  nativeName: { [key: string]: CountryNativeName };
  official:   string;
};
