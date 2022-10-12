import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
   CampaignFactory.abi,
    '0x9DD234CFB465295C0287C3b3107508F9290db8A2'
)

export default instance