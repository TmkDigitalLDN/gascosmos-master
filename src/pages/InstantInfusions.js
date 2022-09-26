import React from 'react';
import Layout from '../components/Layout';
import pic1 from '../assets/images/image7.jpeg';
import pic2 from '../assets/images/image3.jpeg';
import pic3 from '../assets/images/image6.jpeg';
import YoutubeEmbed from '../components/YoutubeEmbed';









const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Instant Infusions</h2>
        </div>
      </header>

      

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Infuso Soda Infuso Whip</h3>
          <p>
          Utilising the lipophilic. inherently sweet properties of Nitrous
          Oxide, The Infuso Soda device creates a Soft Sweet Soda out of
          water & accelerates the infusion of water, spirits, cocktails,
          wines, oils, ciders or vinegars with any aromatic herb, spice,
          dried fruit & nuts. 
          </p>
          <p>
          Simply pour your chosen liquid into the provided bottle, add
          your aromatics (cut into small pieces to increas surface area),
          screw the bottle into the gas-out head (the N2O cylinder screws
          into the gas-in head), depress the lever a few times to release
          the N2O into your mix and watch the infusion occur! Unscrew
          your bottle, cap it and leave it to infuse for a period of time
          (leave longer for stronger infusion). Infuse Rosemary or Sage
          Water, Pineapple & Coconut Vodka, Chili & Garlic Oil..
          Let Your Imagination Propel You!
          </p>
      
  

						<h4 style={{textAlign: 'center'}}>Infuso Soda ~ Infuso Whip</h4>
          <p><span className="image left"><img src={pic1} alt="" /></span>Simply unscrew the Infuso Soda nozzle
                    from the head & replace it with the
                    Infuso hose at one end and
                    quick-connect the other end to the
                    Infuso Whip adapter on any whipper
                    and you can charge it with N2O to
                    instantly whip luxurious creams,
                    mousses, toppings, puddings & desserts!</p>


                    <h4 >Flexible Mounting</h4>
          <p ><span className="image right"><img src={pic2} alt="" /></span>Fix your Infuso Soda on your wall to
                                  optimize your available surface space
                                  or feature it by fixing it to a suitable
                                  object like a beautiful log!</p>


            


                    
                          <span className="image left"><img src={pic3} alt="" /></span>
                          <h4 style={{textAlign: 'left'}}>What You Get</h4>
                          	<ol >
                              <li>The lever-activated charging head</li>
                              <li>A choice of 615g cylinders N2O for infusion/whipping or CO2 for seltzer</li>
                              <li>The wall-fixing bracket with its Velcro securing strap (goes around bracket & cylinder).</li>
                              <li>Two Infuso Soda beverage bottles.</li>
								            </ol>



                            <br />
                            <br />
                   
                 
                
                         
                         
                   

          <h3 className="major">Profitable Margins on Instant Refills!</h3>
        
            <p>Become an exclusively appointed Infuso Soda
            Franchisee/marketer/distributor and make excellent profit
            margins on the Infuso Soda (includes a single choice of N2O or
            CO2 and on 6 pack cylinder refill case sales & on single
            cylinder refills.</p>

            <br />
       
            <YoutubeEmbed embedId="TRnnhbrQ8dE" />

            <br />
            

            <h3 className="major">Get Natural!!</h3>
            <h4>Use Natural Syrups, Extracts,
              Herbs & Fruits</h4>
            <p>Infuse with your syrups, aromatic herbs, fruits & nuts with
              Instant N2O or add cabonation with Instant Soda. Use the
              easy-to-use INFUSO attactchment to any standard whipper
              and whip a delight of creams, foams, mousses, desserts and
              puddingssjngs in an INSTANT.</p>

              <h3 className="major">Versatility</h3>
            <h4>Three-In-One!</h4>
            <p>Infuse, Whip & carbonate with one device! Add Infuso Soda to
your kitchen, bar & your restaurant utensil catalogue and
make attractive margins. Your clients will love you!
For retail orders go to www.gascosmos.co.uk or email info@gascosmos.co.uk for distributior enquiries. WhatsApp : 07557055842  </p>
              
           </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
