import { Link } from "react-router-dom"
export default function Faq() {
  return (
    <div className='pt-10 text-2xl'>
       <h3 className='text-teal-700'>Frequently asked questions</h3>
        <div className='p-8 m-12 shadow-2xl '>
          <p className='text-teal-700'>What Are The Benefits of the Imarika Trust Fund?</p>
          <p className='m-4'>• Our Trust provides an <span className='text-teal-700'>orderly</span> means of administering your personal and financial
            affairs should you become incapacitated, or upon your unfortunate demise. This also 
            provides a <span className='text-teal-700'>smooth</span> and <span className='text-teal-700'>simple</span> method to transfer your funds, property and assets to 
            your intended beneficiaries in an <span className='text-teal-700'>unbiased</span> and <span className='text-teal-700'>independent</span> way.</p>
            <p className='m-4'>• It is <span className='text-teal-700'>easy</span> to set up as you, the Settlor, need to only sign a Grant Letter to adhere 
            to the Trust Deed and Rules (TDR) that govern how your Trust will be administered. These
            have already been formulated.</p>
            <p className='m-4'>• The Trust is <span className='text-teal-700'>affordable</span> as we offer <span className='text-teal-700'>professional</span> services charged at 1% of the value of
            the fund (your funds, property and assets) per annum. There are <span className='text-teal-700'>no joining charges</span> nor minimum fee.</p>
        </div>
        <div className='p-8 m-12 shadow-2xl '>
          <p className='text-teal-700'>What Assets Can Be Held By The Imarika Trust Fund?</p>
            <p className='m-4'>• Term deposits, fixed deposits and recurring deposits
              <p className='m-4'>• Listed stocks and shares</p>
              <p className='m-4'>• Insurance policies</p>
              <p className='m-4'>• Private company shares</p>
              <p className='m-4'>• Bank accounts</p>
              <p className='m-4'>• Property, houses and land</p>
              <p className='m-4'>• Mutual funds or Unit Trust investments</p>
              <p className='m-4'>• Retirement benefits</p>
            </p>
        </div>
        <div className='p-8 m-12 shadow-2xl'>
          <p className='text-teal-700'>How Do I Get Started?</p>
            <p className='m-4'>• Log in at the <span className='underline hover:text-teal-700'>
          <Link to = '/aboutus/getstarted' className=''>
            Get started </Link> </span> section
            <p className='m-4'>• Visit any of our offices across Kenya to engage us. We will request you to provide
               us with your written instructions known as Grant Letters on how to deal with your funds,
                property or assets in the event of your incapacitation or untimely demise.</p>
          </p>
        </div>
        <div className='p-8 m-12 shadow-2xl'>
          <p className='text-teal-700'>What Documents Do I Need To Set Up The Trust?</p>
            <p  className='m-4'>• Your signed Grant Letter</p>
            <p className='m-4'>• A detailed list of your property and assets to held in the Trust Fund</p>
            <p className='m-4'>•  Written authority by the Settlor to transfer the funds, property and assets to 
              the Imarika Trust Fund. This will be prepared in accordance with your Trust Deed 
              and Rules (TDR)</p>
            <p className='m-4'>• Evidence of the source of funds, property or assets in line with government AntiMoney
               Laundering (AML) Regulations</p>
            <p className='m-4'>• A copy of your national identification card or passport.</p>
        </div>
        <div className='p-8 m-12 shadow-2xl'>
          <p className='text-teal-700'>What Does It Cost To Set Up A Trust?</p>
            <p className='m-4'>
                <p className='m-4'>• We charge 1% per annum of the total value of the Trust (funds, property and assets) 
                and add on Value Added Tax (VAT).</p>
                <p className='m-4'>• This is charged quarterly and calculated based on the value of the funds held in the 
                Trust on the date of calculation</p>
                <p className='m-4'>• How the fee will be paid will be agreed upon with you as the Settlor at the point at which 
                the Trust is set up.</p>
            </p>
        </div>
        <div className='p-8 m-12 shadow-2xl'>
          <p className='text-teal-700'>How Do My Beneficiaries Withdraw Funds From The Trust?</p>
            <p className='m-4'><p></p>
            <p className='m-4'>• The person you designated as the authorised signatory, will write a letter to the Trustee (the Imarika Trust Fund) 
              attaching the documents that prove that the withdrawal is necessary e.g. a letter from the beneficiaries school requesting 
              for school fees or funds to go for a school trip or a doctor’s letter indicating that the beneficiary needs to have medical
               tests and treatment.</p>
            <p className='m-4'>• Once the payment has been effected, we as the Trustee will call the guardian to collect the cheque or Electronic Funds Transfer 
              (EFT) confirmation of transfer of funds to the designated recipient</p>
            </p>
        </div>
        <p><Link to = '/help' className='underline hover:text-teal-700'>Back to top</Link></p>
    </div>
  )
}
