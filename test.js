let str = `A purpose-led organization that is building a meaningful future through innovation, technology, and collective knowledge. We're #BuildingOnBelief.

A part of the Tata group, India's largest multinational business group, TCS has over 500,000 of the world’s best-trained consultants in 46 countries. The company generated consolidated revenues of US $22.2 billion in the fiscal year ended March 31, 2021, and is listed on the BSE (formerly Bombay Stock Exchange) and the NSE (National Stock Exchange) in India. 

TCS' proactive stance on climate change and award-winning work with communities across the world have earned it a place in leading sustainability indices such as the MSCI Global Sustainability Index and the FTSE4Good Emerging Index. 
`

 
let parser = new DOMParser();
let doc = parser.parseFromString(str, 'text/html');
  console.log(doc.body)