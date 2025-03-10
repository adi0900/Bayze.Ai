import { gql } from '@apollo/client';

export const GET_ESG_DATA = gql`
  query {
    getESGData {
      id
      factoryId
      location
      month
      energyConsumption
      carbonEmissions
      renewableEnergyPercentage
      wasteGenerated
    }
  }
`;
