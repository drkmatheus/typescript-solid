export interface CustomerInfo {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomer {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomer {
  name: string;
  cnpj: string;
}
