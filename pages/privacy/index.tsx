import Image from "next/image";
import Link from "next/link";

import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";
import Call1Icon from "@/public/Assets/pages/call1.png";
import Message1Icon from "@/public/Assets/pages/message1.png";
import HomeIcon from "@/public/Assets/pages/home.png";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";
import dotData from "@/public/Assets/pages/dotData.png";
import map from "@/public/Assets/pages/map.png";
import slide1 from "@/public/Assets/pages/slide1.png";
import slide2 from "@/public/Assets/pages/slide2.png";
import slide3 from "@/public/Assets/pages/slide3.png";
import slide4 from "@/public/Assets/pages/slide4.png";
import SliderTest from "../testSlider";
import SliderTestVideo from "../testSliderVideo";
import Head from 'next/head'
export default function Privacy() {

  return (
    <div className="outerMainAbout">
      <Head>
      <title>Privacy Policy</title>
      <meta name='description' content='WELCOME TO KAUSHIKI CHAKRABORTY MUSIC AND US' />
      </Head>
      <div className="bannerDataTop">
        <div className="innerContentBnr">
           <h3>Privacy</h3>
           <div className="breadcrumb-info">
              <ul>
                <li className="breadcrumb-item">
                  <Link href={"/"}>Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Privacy</li>
              </ul>
            </div>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="formInfoData">
        <div className="centerWrapper">
          <h3>Privacy</h3>
          <h2>Kaushiki chakraborty Music</h2>
          <div className="termsAndConditions listData">
            <p>Effective Date: October 1, 2023</p>
            <p>Date of last revision: October 1, 2023</p>
            <p>Thank you for using Kaushiki’s Music & Us (M&U), a website provided by Kaushiki Arts
            Private limited (“Company”, “we”, “our”, “us”)! We strive to ensure the best possible user
            experience. Your privacy and the security of your personal data will always be of utmost
            importance to us. Therefore, we want to, transparently, through this comprehensive privacy
            policy, (“Privacy Policy”) show how we collect, use, share, disclose, and store your personal
            information. All defined terms in this Privacy Policy use the same definitions set forth in the
            Terms of Use. This Privacy Policy only applies to residents of India. </p>
            <p>By using the Platform provided by the Company, you are consenting to the use of your
            information in accordance with the manner set out in this Privacy Policy. </p>
            <p>The aim of the policy is to:</p>
            <ul>
                <li>Ensure that you understand what personal data or personally identifiable
                information we collect about you; </li>
                <li>Provide you the reason for collecting, sharing and using the information; and</li>
                <li>Explain how the personal data that you share with us will enable us to provide
                you with a great user experience on the Platform</li>
            </ul>
            <p>Please read the Privacy Policy carefully and familiarize yourself with our privacy practices. If
            you have any questions regarding this Privacy Policy, please contact us at [email]. Please refer
            to our Privacy Policy for EU/EEA Residents for provisions specific to residents of the
            European Union and European Economic Area.</p>
            <h4>PERSONAL DATA THAT WE COLLECT FROM YOU</h4>
            <table>
               <tr>
                  <th>Category of Personal Data</th>
                  <th>Sub- category</th>
                  <th>Description of the category</th>
               </tr>
               <tr>
                  <td colSpan={3}>
                    <b>Personal Data collected when you sign in/ sign up for the Platform provided by the Company</b>
                  </td>
               </tr>
               <tr>
                  <td rowSpan={3}><b>User Data</b></td>
                  <td>Registration Data</td>
                  <td>This is the data that helps you register and open an account
                  with M&U. This data may include: first name, last name,
                  username, email address, birth date, phone number, gender,
                  street address, and country. </td>
               </tr>
               <tr>
                  <td>Optional Data</td>
                  <td>Profile picture associated with your User Account</td>
               </tr>
               <tr>
                  <td>Minor’s Data</td>
                  <td>In case the student is a minor, we will collect the first name,
                  last name, date of birth, gender and country</td>
               </tr>
               <tr>
                  <td colSpan={3}>
                    <b>Personal Data collected when you use the Services provided by the Company on the Platform</b>
                  </td>
               </tr>
               <tr>
                  <td rowSpan={3}><b>User Data</b></td>
                  <td></td>
                  <td>
                    <ul>
                       <li><p>Information about the Offerings, Courses, Content,
                        or any other Services that you access, view, or
                        purchase on the Platform.</p></li>
                        <li><p>Information about the interactions with M&U such
                        as search queries (including the date and time of any
                        requests you make), purchases of any Offerings that
                        you make on the Platform, streaming history, and
                        video playback speed of the Content you
                        view/access on the Platform, your browsing history
                        on the Platform, your interaction with the Instructor
                        through the Platform. </p></li>
                        <li><p>User Content that you post/share/upload with the
                          Company through the Platform including but not
                          limited to audios, photos and/or comments that you
                          make available through your profile (Note that
                          M&U will access your camera only if you give us
                          permission to do so. We have no intention of
                          scanning or importing your device’s camera roll.)</p></li>
                          <li><p>When you make a complaint to us regarding any
                          Services offered on the Platform, we will also collect
                          Personal Data (e.g. name, email id, or phone number
                          etc.) submitted to us in the complaint</p></li>
                    </ul>
                  </td>
               </tr>
               <tr>
                  <td>Automatically Collected Technical Data</td>
                  <td>
                  <ul>
                       <li><p>URL information</p></li>
                        <li><p>Device identifiers to know about type of device you
                        are using, the unique device ID, Network connection
                        type (e.g. 3G, LTE, Bluetooth), provider network,
                        device performance, browser type, operating
                        system, information enabling digital rights
                        management</p></li>
                        <li><p>Online identifiers including cookies and Internet
                          Protocol (IP) addresses</p></li>
                          <li><p>Specific actions that you take on the Platform (e.g.
                          posting comments, uploading User Content,
                          performing searches, visiting pages or screens,
                          interaction with other users)
                          </p></li>
                          <li><p>Time, frequency and duration of usage</p></li>
                          <li><p>Location data- your non- precise location which may
                          be derived or inferred from certain technical data
                          (e.g. IP address, language setting of your device, or
                          payment currency) to comply with geographic
                          requirements in the licensing arrangement with our
                          service providers/partner and deliver personalized
                          content and advertising to you </p></li>
                    </ul>
                  </td>
               </tr>
               <tr>
                  <td>Voice Data </td>
                  <td>
                  <ul>
                       <li><p>URL information</p></li>
                        <li><p>In case you record your assignment on the Platform
                          itself, then we will request permission to use the
                          microphone of your device.</p></li>
                    </ul>
                  </td>
               </tr>
               <tr>
                  <td colSpan={3}>
                    <b>Personal Data that you choose to give us that enables us to provide with additional features</b>
                  </td>
               </tr>
               <tr>
                  <td rowSpan={1}><b>Additional features/ functionality </b></td>
                  <td>Payment and Purchase Data</td>
                  <td>
                    <ul>
                       <li><p>We may collect such information to process the
                        purchases that you make through our Platform. The
                        exact Personal Data collected varies according to the
                        payment method but will include information such
                        as: </p></li>
                        <li><p>Name</p></li>
                        <li><p>Date of birth</p></li>
                        <li><p>Credit or debit card type, expiration date,
                        certain digits of your card, CVV code</p></li>
                        <li><p>Postal code</p></li>
                        <li><p>Mobile number</p></li>
                        <li><p>Details of your purchase and payment history</p></li>
                        <li><p>Offering selected to be purchased.</p></li>
                    </ul>
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>Survey/Contest/Sweepstakes Data</td>
                  <td>
                    <p>We collect the Personal Data that you provide when you
                    respond to a survey or questionnaire.</p>
                  </td>
               </tr>
               <tr>
                  <td colSpan={3}>
                    <b>Personal Data that we collect from various third parties</b>
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>Authentication Data</td>
                  <td>
                    <p>[ Check if they use any authentication service or any open
                    source components? for doing this]</p>
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>Technical service partners</td>
                  <td>
                    <p>[ Check if they use any authentication service or any open
                    source components? for doing this]</p>
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>Payment partners</td>
                  <td>
                    <p>The data that we receive from payment partners will
                    enable us to send you invoices and process payments</p>
                  </td>
               </tr>
            </table>
            <h4>THE WAY WE USE YOUR PERSONAL DATA</h4>
            <table>
               <tr>
                 <td><b>Reason for M&U/ Company to process your Personal Data </b></td>
                 <td><b>Type/ Category of data used</b></td>
               </tr>
               <tr>
                 <td><b>To make available and customize the Platform to suit the
                  user’s requirements</b></td>
                  <td rowSpan={2}>
                     <ul>
                        <li>User Data</li>
                        <li>Usage Data</li>
                        <li>Payment and Purchase Data</li>
                     </ul>
                  </td>
               </tr>
               <tr>
                 <td><b>To fulfill contractual obligations that we have to third
                  parties and affiliates that provide services to us. (e.g. to
                  fulfill our contractual obligation to Razorpay, and other
                  service providers) </b></td>
               </tr>
               <tr>
                 <td><b>To improve the services provided on the Platform by
                  diagnosing, troubleshooting and fixing issues</b></td>
                  <td rowSpan={3}>
                     <ul>
                        <li>User Data</li>
                        <li>Usage Data</li>
                     </ul>
                  </td>
               </tr>
               <tr>
                 <td><b>To develop new technology, features and to improve services </b></td>
               </tr>
               <tr>
                 <td><b>For marketing and advertisement on the Platform </b></td>
               </tr>
               <tr>
                 <td><b>For ensuring compliance to the law and law enforcement actions/request</b></td>
                  <td>
                     <ul>
                        <li>User Data</li>
                        <li>Usage Data</li>
                     </ul>
                  </td>
               </tr>
               <tr>
                 <td><b>To defend legal claims brought against us</b></td>
                  <td>
                     <ul>
                        <li>Payment and Purchase Data</li>
                        <li>Survey/ Contest and Sweepstakes Data</li>
                     </ul>
                  </td>
               </tr>
               <tr>
                 <td><b>For processing payments for purchases made the Platform</b></td>
                  <td>
                     <ul>
                        <li>User Data</li>
                        <li>Usage Data</li>
                        <li>Payment and Purchase Data</li>
                     </ul>
                  </td>
               </tr>
               <tr>
                 <td><b>To conduct research, contest, surveys and sweepstakes </b></td>
                  <td>
                     <ul>
                        <li>User Data</li>
                        <li>Usage Data</li>
                        <li>Survey/Contest and Sweepstakes Data</li>
                     </ul>
                  </td>
               </tr>
               <tr>
                 <td><b>To communicate with you about updates to the Platform,
                  changes in Terms of Use, & Privacy Policy</b></td>
                  <td>
                     <ul>
                        <li>User Data</li>
                     </ul>
                  </td>
               </tr>
            </table>
            <h4>SHARING YOUR PERSONAL DATA </h4>
            <table>
                <tr>
                   <td>
                      <b>Information that is available Publicly</b>
                   </td>
                   <td>
                     <ul>
                        <li>We do not make any data of a user available publicly</li>
                     </ul>
                   </td>
                </tr>
                <tr>
                   <td>
                      <b>Information that is available to the Platform Instructor</b>
                   </td>
                   <td>
                     <ul>
                        <li>Your Public Profile Data will be publicly available on the Platform.</li>
                        <li>Content that you post/share/upload with the community
                        through the Platform may also be publicly available (for
                        example, comments and photos) </li>
                     </ul>
                   </td>
                </tr>
            </table>
            <h4>COOKIES & OTHER TECHNOLOGIES</h4>
            <p>Our Platform uses cookies and similar technologies such as pixel tags, web beacons, clear gifs,
            and JavaScript (collectively, Cookies). Cookies are small pieces of data–usually text files–-
            placed on your computer, tablet, phone, or similar device when you use that device to visit our
            Platform. Cookies enable our servers to recognize your web browser and tell us how and when
            you visit and use our Platform, to analyze trends, learn about our user base and operate and
            improve our Platform. </p>
            <p>We use or may use the following types of Cookies: </p>
            <ul>
               <li><b>Functional Cookies.</b>  Functional Cookies are used to record your choices and
                settings regarding our Platform, maintain your preferences over time, and
                recognize you when you return to our Platform. These Cookies help us to
                personalize our content for you, greet you by name, and remember your
                preferences (for example, your choice of language or region).</li>
                <li><b>Performance/Analytical Cookies</b> Performance/Analytical Cookies allow us
                  to understand how visitors use our Platform such as by collecting information
                  about the number of visitors to the Platform, what pages visitors view on our
                  Platform and how long visitors are viewing pages on the Platform.
                  Performance/Analytical Cookies also help us measure the performance of our
                  advertising campaigns to help us improve our campaigns and the Services
                  content for those who engage with our advertising. For example, Google, Inc.
                  (Google) uses cookies in connection with its Google Analytics services.
                  Google ability to use and share information collected by Google Analytics
                  about your visits to the Platform is subject to the Google Analytics Terms of
                  Use and the Google Privacy Policy. You have the option to opt-out of Google
                  use of cookies by visiting the Google advertising opt-out page at
                  www.google.com/privacy_ads.html or the Google Analytics Opt-out Browser
                  Add-on at https://tools.google.com/dlpage/gaoptout/.</li>
            </ul>
            <p>You can decide whether or not to accept cookies through your internet browser settings. Most
            browsers have an option for turning off the cookie feature, which will prevent your browser
            from accepting new cookies, as well as (depending on the sophistication of your browser
            software) allow you to decide on acceptance of each new cookie in a variety of ways. You can
            also delete all cookies that are already on your computer. If you do this, however, you may
            have to adjust some preferences every time you visit a site manually, and some of the services
            and functionalities may not work.
            </p>
            <p>To explore what cookie setting is available to you, look in the preferences or options
            section of your browser menu. To find out more information about cookies, including
            information about how to manage and delete cookies, please visit
            http://www.allaboutcookies.org/. </p>
            <p>We may also supplement the information we collect from you with information received from
            third parties, including third parties that have placed their Cookies on your device(s). Please
            note, because of our use of Cookies, the Platform does not support Do Not Track requests
            sent from a browser at this time. </p>
            <h4>DATA SECURITY & RETENTION</h4>
            <p>We seek to protect your Personal Data from unauthorized access, use, and disclosure by
            employing appropriate physical, technical, organizational, and administrative security
            measures based on the type of Personal Data and how we are processing that data. You should
            also help protect your data by appropriately selecting and protecting your password and/or
            other sign-on mechanism; limiting access to your computer or device and browser; and signing
            off after you have finished accessing your account. Although we work to protect the security
            of your account and other data that we hold in our records, please be aware that no method of
            transmitting data over the Internet or storing data is completely secure. We cannot guarantee the complete security of any data you share with us, and except as expressly required by law;
            we are not responsible for the theft, destruction, loss or inadvertent disclosure of your
            information or content. </p>
            <p>We retain Personal Data about you for as long as you have an open account with us or as
            otherwise necessary to provide you with our Services. In some cases, we retain Personal Data
            for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or
            collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation.
            We may further retain information in an anonymous or aggregated form where that information
            would not identify you personally. </p>
            <h4>HOW WE RESPOND TO DNT SIGNALS</h4>
            <p>Your browser may offer you a “Do Not Track” option, which allows you to signal to operators
            of websites and web applications and services that you do not wish such operators to track
            certain of your online activities over time and across different websites. Our Services do not
            support DO Not Track requests at this time. </p>
            <h4>YOUR RIGHTS AND PREFERENCES</h4>
            <p>Users on our Platform will have the following rights:</p>
            <table>
               <tr>
                 <th><b>Rights</b></th>
                 <th><b>Description</b></th>
               </tr>
               <tr>
                 <td>
                    <p>Rights of Access</p>
                 </td>
                 <td>
                    <p>You can request access or a copy of your Personal Data that we may process about you</p>
                 </td>
               </tr>
               <tr>
                 <td>
                    <p>Right to rectification</p>
                 </td>
                 <td>
                    <p>You can also request us to update your information with us that is incorrect or incomplete</p>
                 </td>
               </tr>
               <tr>
                 <td>
                    <p>Right to erasure</p>
                 </td>
                 <td>
                    <p>Users can request us to delete their Personal Data that we have</p>
                 </td>
               </tr>
               <tr>
                 <td>
                    <p>Right to restrict</p>
                 </td>
                 <td>
                    <p>Users can always request us to stop us from processing Personal Data
                    either temporarily or permanently</p>
                 </td>
               </tr>
               <tr>
                 <td>
                    <p>Right to Withdraw consent </p>
                 </td>
                 <td>
                    <p>Users can withdraw any consent that they have given to us by opting out.</p>
                 </td>
               </tr>
            </table>
            <p>To exercise any of the above rights, you can contact us at [email]. You may do the same by
            going to the Privacy Settings through your account on the website. We also seek to provide
            choices about the information that you provide us. When you visit our Website, we may not
            ask you for any Personal Data although there will be certain information that will be collected
            automatically.</p>
            <h4>CHILDREN</h4>
            <p>The Platform is not directed at, targeted towards or intended for use by children. Anyone under
            the age of 18 shall not use the Platform and must not attempt to register an account or in any
            way interact with the Platform or submit any Personal Data to us, except under the supervision
            and guidance of parents/guardians. We have no intention to collect any Personal Data related
            to children under the Minimum Age. If it comes to our attention that we have inadvertently
            collected such information from a person below the Minimum Age, we will delete such
            Personal Data immediately. If you know that we have collected such data, please reach out to
            us at:</p>
            <h4>OTHER STATE LAW PRIVACY RIGHTS</h4>
            <p>We do not currently intend to share your Personal Data with third parties for marketing
            purposes. However, we reserve the right to do so. I
            </p>
            <h4>INTERNATIONAL DATA TRANSFERS</h4>
            <p>Company shares your Personal Data globally to carry out the intended functionalities of the
            Platform if and when possible or to carry out the activities specified in this Policy. We may
            also subcontract processing to or share the Personal Data with third parties located in other
            countries. In such a case, the Personal Data will be subjected to privacy laws of that country
            which may be different from those in India. We will ensure that the transfer of your Personal
            Data is carried out with appropriate contractual, technical, and organizational measures.</p>
            <h4>CHANGES TO THIS POLICY</h4>
            <p>We are constantly trying to improve our Platform, so we may need to change this Privacy
            Policy from time to time as well, but we will alert you to changes by placing a notice on the
            (please provide the website address where you will place the privacy policy) website, by either
            sending you an email or by some other means. Please note that if you have opted not to receive
            legal notice emails from us (or you haven not provided us with your email address), those legal
            notices will still govern your use of the Platform. You are still responsible for reading and
            understanding them. If you use the Platform after any changes to the Privacy Policy have been
            posted; such use indicates that you agree to all changes. Use of information we collect is subject
            to the Privacy Policy in effect at the time such information is collected. </p>
            <h4>CONTACT INFORMATION</h4>
            <p>Thank you for reading our Privacy Policy. If you have any questions or comments about this
            Privacy Policy, how we collect and use your Personal Data, your choices, and rights regarding
            such use, please do not hesitate to contact us at: </p>
            <p>Email:</p>
            <p>Phone No:</p>
            <p>Address:</p>
          </div>
        </div>
      </div>
    </div>
  );
}
