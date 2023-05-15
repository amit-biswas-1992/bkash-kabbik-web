interface PackInfo {
  
  id: number,
  subscriptionItemId: number,
  name: string,
  amount: string,
  length: string,
  description: string,
  recommendation: string,
  status: string,
  sku: string,
  rawPrice: number,
  days: number,
  created_at: Date,
  updated_at: null,
  frequency: string,

}

export default PackInfo;