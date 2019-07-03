# Second Page and Wrap-up

We've made it! At this point, we've learned enough about HTML and CSS that we can actually hold our own a bit and create simple pages for the web. There's still some more advanced techniques to learn when it comes to these two languages&mdash;which will be covered next week&mdash;but in the early days of web development this is about 75% of what a lot of developers used on a regular basis.

Throughout this project we have learned how to create and organize content for a web page, create custom styles and layouts for that content, and utilized the proper tools to protect, backup, and publish our work. This is a lot to take in, so we're going to use this last lesson to reinforce these concepts and "take the training wheels off" by building a second (simpler) page for our Run Buddy product site.

The page we're going to be building is for the site's "Privacy Policy", which has become a must-have as the web has become increasingly interactive with the user and data-centric. This is a great page to build because there isn't too much to it when we compare it to the page we just completed. As a matter of fact, it's kind of boring, but that's not a bad thing for us to practice with.

The main three points that will be introduced in this lesson are:

1. Adding a second HTML document to our web site and how they can be connected through `<a>` tags.

2. How to reuse HTML content through select copy and pasting.

3. How two HTML pages can share CSS styles, but also implement a second stylesheet for styles more specific to the second page. This will entail us overriding some previously defined styles.

For reference, this is the page we will be building:

![Privacy Policy completed](assets/step-7/100-privacy-complete.png)

As we can see, this is a very text-heavy page with some similar components and styles, so we'll get to recycle a good amount of code we wrote earlier. Let's get started!

## Creating our next HTML file

In our first lesson, what steps did we take to get to a point where we could start writing HTML? We had to create the HTML file we were going to build, so let's do this again.

Using the command line, create a file in the root of our project folder called `privacy-policy.html`. Think back to the first and second lessons where we created files, what was the command we used?

> HINT: When using the command line to create folders or files, it is easy to forget where you are running these commands, so don't forget to use the `pwd` command to print out the command line's current location and confirm the current directory is the one you want to use.

So now, in the root of our project's folder, there should be two HTML files: `index.html` and `privacy-policy.html`.

## Adding content to our Privacy Policy

Before we add the actual content, we need to create the skeleton of our HTML document. This means we need to get our starting HTML tags in place. Again, think back to the first lesson in this project before any Run Buddy-specific content was added. The page had the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Run Buddy</title>
  </head>
  <body>
  </body>
</html>
```

> PAUSE
>
> What is the main purpose of the `<head>` tag?\
> A: The `<header>` holds other specific HTML tags that provide information that isn't necessary for the page's visitor to see, but to help the browser understand what the page is about, what it should look like, and any other behind-the-scenes data. None of this content is displayed physically on the page.
>
> What is the main purpose of the `<body>` tag?\
> A: The `<body>` holds all of the document's actual content that is meant to be seen or interacted with by the page's visitor. Anything that is between the opening and closing `<body>` tags is visible to the user by default.

> URKEL SAYS: Creating the skeleton of an HTML document is also known as "scaffolding".

Now that we have our document scaffolded, let's make a couple of edits. Since we're creating a new page, we should update the `<title>` to reflect that. While the information between the `<title>` tags isn't necessarily incorrect, it simply isn't as descriptive as it could be. Not only does having a descriptive title help inform the user where they are on the site, it is also useful for accessibility and search engine optimization.

> PRO-TIP: While a descriptive page title is important, it should also be concise and to the point. Google cuts off search result titles at around 60 characters, so anything under that is optimal.

Take another look at the screenshot of the finished product we're working towards and compare it to `index.html`. Notice any similar pieces that we can reuse here? It would be confusing for visitors to experience different styles throughout a single web site, so most sites have similar&mdash;if not identical&mdash;components to them.

Let's identify the obvious sections in the HTML and we'll copy and paste them into our new document:

- **`<header>`** - This entire header can be copied over to the new page. In this design, there is nothing that differentiates the `<header>` content between any pages, so nothing needs to change after pasting it into `privacy-policy.html`'s HTML.

- **`<footer>`** - Just like the header, this can be copied directly over into our new document. Nothing needs to be edited here.

- **`<section class="hero">`** - We're also going to reuse this, but then edit the inner content of it, so for now it is easier (and better practice) to go into `privacy-policy.html` and add right after the closing `</header>` tag:

```html
<section class="hero">

</section>
```

We'll get to adding content to this section next, but first let's save our work and open up this file in the browser.

> HINT: Using the "Open in Browser" extension, right-click anywhere in the HTML document and select the option that says "Open In Default Browser". This is the quickest way to open up an HTML document direct from Visual Studio Code. 
>
> Keep in mind, this will only work for HTML files.

The page should look something like this:

![Privacy Policy - html started](assets/step-7/200-html-starter.png)

Before we add our style sheet's `<link>` tag in, we'll go ahead and fill out the rest of our content. First we'll go and take care of the content that goes inside of our `<section class="hero">`. As you can see, we've removed the sign up form from that we used in `index.html`. We are going to repurpose this area to hold the title of the page by editing the `<section>` to look like this:

```html
<section class="hero">
  <h2 class="page-title">
    Privacy Policy
  </h2>
</section>
```

Even though we aren't building more HTML pages than this, this section has now been repurposed to be used on any new page that you may need to be created in the future.

> STORY TIME: It is not uncommon for a web-based project to be considered "complete", only for a boss or client to come back and add more. These additions could come in the form of simple edits/additions to the existing project files&mdash;which is typically an easy change&mdash;or it can involve creating more pages, features, or even functionality. 
>
> That is why when building new projects, it is a good practice to set up more general styles and HTML content layouts that can easily be reused across new sections rather than having to start each new piece from scratch.

Now that the page's title is being displayed, we'll go and add the actual privacy policy content. Normally when it comes to a privacy policy, a team of lawyers will provide all of the content that needs to be displayed on the page.

We don't have any of Run Buddy's lawyers on speed dial to get us this information, but there are privacy policy generator services that can be found [on the web](https://www.privacypolicygenerator.info/). All you have to do is plug in the company's information and they'll return a privacy policy to be copied and pasted wherever it's needed.

Before we add this content, let's create the container that will hold it.

Add an `<article>` tag after the closing `</section>` of the hero with a class of `secondary-content`.

Now let's go ahead and add this content inside the `<article>` tag that was just created (be warned, this is long):

THIS SHOULD BE DOWNLOADABLE
```html
<p>
        Website Terms of Use
      </p>

      <p>
        Version 1.0
      </p>

      <p>
        The Run Buddy website located at https://runbuddy.io is a copyrighted work belonging to Run Buddy. Certain
        features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site
        in connection with such features.
      </p>

      <p>
        All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
      </p>

      <p>
        These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY
        LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority
        and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU
        DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
      </p>

      <p>
        These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also
        limit the remedies available to you in the event of a dispute. These Terms of Use were created with the help of
        the Terms Of Use Generator and the Privacy Policy Template.
      </p>

      <h3>
        Access to the Site
      </h3>

      <p>
        Subject to these Terms. Company grants you a non-transferable, non-exclusive, revocable, limited license to
        access the Site solely for your own personal, noncommercial use.
      </p>

      <p>
        Certain Restrictions. The rights approved to you in these Terms are subject to the following restrictions: (a)
        you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site;
        (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of
        the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except
        as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded,
        displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release,
        update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other
        proprietary notices on the Site must be retained on all copies thereof.
      </p>

      <p>
        Company reserves the right to change, suspend, or cease the Site with or without notice to you. You approved
        that Company will not be held liable to you or any third-party for any change, interruption, or termination of
        the Site or any part.
      </p>

      <p>
        No Support or Maintenance. You agree that Company will have no obligation to provide you with any support in
        connection with the Site.
      </p>

      <p>
        Excluding any User Content that you may provide, you are aware that all the intellectual property rights,
        including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company
        or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or
        interest in or to any intellectual property rights, except for the limited access rights expressed in Section
        2.1. Company and its suppliers reserve all rights not granted in these Terms.
      </p>

      <h3>
        Third-Party Links & Ads; Other Users
      </h3>

      <p>
        Third-Party Links & Ads. The Site may contain links to third-party websites and services, and/or display
        advertisements for third-parties. Such Third-Party Links & Ads are not under the control of Company, and Company
        is not responsible for any Third-Party Links & Ads. Company provides access to these Third-Party Links & Ads
        only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any
        representations with respect to Third-Party Links & Ads. You use all Third-Party Links & Ads at your own risk,
        and should apply a suitable level of caution and discretion in doing so. When you click on any of the
        Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s
        privacy and data gathering practices.
      </p>

      <p>
        Other Users. Each Site user is solely responsible for any and all of its own User Content. Because we do not
        control User Content, you acknowledge and agree that we are not responsible for any User Content, whether
        provided by you or by others. You agree that Company will not be responsible for any loss or damage incurred as
        the result of any such interactions. If there is a dispute between you and any Site user, we are under no
        obligation to become involved.
      </p>

      <p>
        You hereby release and forever discharge the Company and our officers, employees, agents, successors, and
        assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim,
        controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has
        arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site. If you are
        a California resident, you hereby waive California civil code section 1542 in connection with the foregoing,
        which states: "a general release does not extend to claims which the creditor does not know or suspect to exist
        in his or her favor at the time of executing the release, which if known by him or her must have materially
        affected his or her settlement with the debtor."
      </p>

      <p>
        Cookies and Web Beacons. Like any other website, Run Buddy uses ‘cookies’. These cookies are used to store
        information including visitors’ preferences, and the pages on the website that the visitor accessed or visited.
        The information is used to optimize the users’ experience by customizing our web page content based on visitors’
        browser type and/or other information.
      </p>

      <h3>
        Disclaimers
      </h3>

      <p>
        The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim
        any and all warranties and conditions of any kind, whether express, implied, or statutory, including all
        warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy,
        or non-infringement. We and our suppliers make not guarantee that the site will meet your requirements, will be
        available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of
        viruses or other harmful code, complete, legal, or safe. If applicable law requires any warranties with respect
        to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.
      </p>

      <p>
        Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to
        you. Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation
        may not apply to you.
      </p>

      <h3>
        Limitation on Liability
      </h3>

      <p>
        To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any
        third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect,
        consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or
        your use of, or incapability to use the site even if company has been advised of the possibility of such
        damages. Access to and use of the site is at your own discretion and risk, and you will be solely responsible
        for any damage to your device or computer system, or loss of data resulting therefrom.
      </p>

      <p>
        To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, our liability
        to you for any damages arising from or related to this agreement, will at all times be limited to a maximum of
        fifty U.S. dollars (u.s. $50). The existence of more than one claim will not enlarge this limit. You agree that
        our suppliers will have no liability of any kind arising from or relating to this agreement.
      </p>

      <p>
        Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential
        damages, so the above limitation or exclusion may not apply to you.
      </p>

      <p>
        Term and Termination. Subject to this Section, these Terms will remain in full force and effect while you use
        the Site. We may suspend or terminate your rights to use the Site at any time for any reason at our sole
        discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under
        these Terms, your Account and right to access and use the Site will terminate immediately. You understand that
        any termination of your Account may involve deletion of your User Content associated with your Account from our
        live databases. Company will not have any liability whatsoever to you for any termination of your rights under
        these Terms. Even after your rights under these Terms are terminated, the following provisions of these Terms
        will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10.
      </p>

      <h3>
        Copyright Policy.
      </h3>

      <p>
        Company respects the intellectual property of others and asks that users of our Site do the same. In connection
        with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal
        of any infringing materials and for the termination of users of our online Site who are repeated infringers of
        intellectual property rights, including copyrights. If you believe that one of our users is, through the use of
        our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material
        removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must
        be provided to our designated Copyright Agent:
      </p>

      <ul>
        <li>
          your physical or electronic signature;
        </li>
        <li>
          identification of the copyrighted work(s) that you claim to have been infringed;
        </li>
        <li>
          identification of the material on our services that you claim is infringing and that you request us to remove;
        </li>
        <li>
          sufficient information to permit us to locate such material; your address, telephone number, and e-mail
          address;
        </li>
        <li>
          a statement that you have a good faith belief that use of the objectionable material is not authorized by the
          copyright owner, its agent, or under the law; and
        </li>
        <li>
          a statement that the information in the notification is accurate, and under penalty of perjury, that you are
          either the owner of the copyright that has allegedly been infringed or that you are authorized to act on
          behalf of the copyright owner.
        </li>
      </ul>

      <p>
        Please note that, pursuant to 17 U.S.C. § 512(f), any misrepresentation of material fact in a written
        notification automatically subjects the complaining party to liability for any damages, costs and attorney’s
        fees incurred by us in connection with the written notification and allegation of copyright infringement.
      </p>

      <h3>
        General
      </h3>

      <p>
        These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by
        sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the
        changes on our Site. You are responsible for providing us with your most current e-mail address. In the event
        that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such
        notice will nonetheless constitute effective notice of the changes described in the notice. Any changes to these
        Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail
        notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site. These
        changes will be effective immediately for new users of our Site. Continued use of our Site following notice of
        such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and
        conditions of such changes. Dispute Resolution. Please read this Arbitration Agreement carefully. It is part of
        your contract with Company and affects your rights. It contains procedures for MANDATORY BINDING ARBITRATION AND
        A CLASS ACTION WAIVER.
      </p>

      <p>
        Applicability of Arbitration Agreement. All claims and disputes in connection with the Terms or the use of any
        product or service provided by the Company that cannot be resolved informally or in small claims court shall be
        resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement. Unless
        otherwise agreed to, all arbitration proceedings shall be held in English. This Arbitration Agreement applies to
        you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest,
        successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods
        provided under the Terms.
      </p>

      <p>
        Notice Requirement and Informal Dispute Resolution. Before either party may seek arbitration, the party must
        first send to the other party a written Notice of Dispute describing the nature and basis of the claim or
        dispute, and the requested relief. A Notice to the Company should be sent to: 55 Main Street, Some Town, CA,
        12345. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally.
        If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received,
        either party may begin an arbitration proceeding. The amount of any settlement offer made by any party may not
        be disclosed to the arbitrator until after the arbitrator has determined the amount of the award to which either
        party is entitled.
      </p>

      <p>
        Arbitration Rules. Arbitration shall be initiated through the American Arbitration Association, an established
        alternative dispute resolution provider that offers arbitration as set forth in this section. If AAA is not
        available to arbitrate, the parties shall agree to select an alternative ADR Provider. The rules of the ADR
        Provider shall govern all aspects of the arbitration except to the extent such rules are in conflict with the
        Terms. The AAA Consumer Arbitration Rules governing the arbitration are available online at adr.org or by
        calling the AAA at 1-800-778-7879. The arbitration shall be conducted by a single, neutral arbitrator. Any
        claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US
        $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking
        relief. For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US
        $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules. Any hearing will be
        held in a location within 100 miles of your residence, unless you reside outside of the United States, and
        unless the parties agree otherwise. If you reside outside of the U.S., the arbitrator shall give the parties
        reasonable notice of the date, time and place of any oral hearings. Any judgment on the award rendered by the
        arbitrator may be entered in any court of competent jurisdiction. If the arbitrator grants you an award that is
        greater than the last settlement offer that the Company made to you prior to the initiation of arbitration, the
        Company will pay you the greater of the award or $2,500.00. Each party shall bear its own costs and
        disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR
        Provider.
      </p>

      <p>
        Additional Rules for Non-Appearance Based Arbitration. If non-appearance based arbitration is elected, the
        arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific
        manner shall be chosen by the party initiating the arbitration. The arbitration shall not involve any personal
        appearance by the parties or witnesses unless otherwise agreed by the parties.
      </p>

      <p>
        Time Limits. If you or the Company pursues arbitration, the arbitration action must be initiated and/or demanded
        within the statute of limitations and within any deadline imposed under the AAA Rules for the pertinent claim.
      </p>

      <p>
        Authority of Arbitrator. If arbitration is initiated, the arbitrator will decide the rights and liabilities of
        you and the Company, and the dispute will not be consolidated with any other matters or joined with any other
        cases or parties. The arbitrator shall have the authority to grant motions dispositive of all or part of any
        claim. The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy
        or relief available to an individual under applicable law, the AAA Rules, and the Terms. The arbitrator shall
        issue a written award and statement of decision describing the essential findings and conclusions on which the
        award is based. The arbitrator has the same authority to award relief on an individual basis that a judge in a
        court of law would have. The award of the arbitrator is final and binding upon you and the Company.
      </p>

      <p>
        Waiver of Jury Trial. THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE
        A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by
        arbitration under this Arbitration Agreement. Arbitration procedures are typically more limited, more efficient
        and less expensive than rules applicable in a court and are subject to very limited review by a court. In the
        event any litigation should arise between you and the Company in any state or federal court in a suit to vacate
        or enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead
        electing that the dispute be resolved by a judge.
      </p>

      <p>
        Waiver of Class or Consolidated Actions. All claims and disputes within the scope of this arbitration agreement
        must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one
        customer or user cannot be arbitrated or litigated jointly or consolidated with those of any other customer or
        user.
      </p>

      <p>
        Confidentiality. All aspects of the arbitration proceeding shall be strictly confidential. The parties agree to
        maintain confidentiality unless otherwise required by law. This paragraph shall not prevent a party from
        submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration
        award, or to seek injunctive or equitable relief.
      </p>

      <p>
        Severability. If any part or parts of this Arbitration Agreement are found under the law to be invalid or
        unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and
        effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.
      </p>

      <p>
        Right to Waive. Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived
        by the party against whom the claim is asserted. Such waiver shall not waive or affect any other portion of this
        Arbitration Agreement.
      </p>

      <p>
        Survival of Agreement. This Arbitration Agreement will survive the termination of your relationship with
        Company.
      </p>

      <p>
        Small Claims Court. Nonetheless the foregoing, either you or the Company may bring an individual action in small
        claims court.
      </p>

      <p>
        Emergency Equitable Relief. Anyhow the foregoing, either party may seek emergency equitable relief before a
        state or federal court in order to maintain the status quo pending arbitration. A request for interim measures
        shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.
      </p>

      <p>
        Claims Not Subject to Arbitration. Notwithstanding the foregoing, claims of defamation, violation of the
        Computer Fraud and Abuse Act, and infringement or misappropriation of the other party’s patent, copyright,
        trademark or trade secrets shall not be subject to this Arbitration Agreement.
      </p>

      <p>
        In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the
        parties hereby agree to submit to the personal jurisdiction of the courts located within Netherlands County,
        California, for such purposes.
      </p>

      <p>
        The Site may be subject to U.S. export control laws and may be subject to export or import regulations in other
        countries. You agree not to export, re-export, or transfer, directly or indirectly, any U.S. technical data
        acquired from Company, or any products utilizing such data, in violation of the United States export laws or
        regulations.
      </p>

      <p>
        Company is located at the address in Section 10.8. If you are a California resident, you may report complaints
        to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer
        Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.
      </p>

      <p>
        Electronic Communications. The communications between you and Company use electronic means, whether you use the
        Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For
        contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b)
        agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company
        provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be
        in a hard copy writing.
      </p>

      <p>
        Entire Terms. These Terms constitute the entire agreement between you and us regarding the use of the Site. Our
        failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right
        or provision. The section titles in these Terms are for convenience only and have no legal or contractual
        effect. The word "including" means "including without limitation". If any provision of these Terms is held to be
        invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or
        unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent
        permitted by law. Your relationship to Company is that of an independent contractor, and neither party is an
        agent or partner of the other. These Terms, and your rights and obligations herein, may not be assigned,
        subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any
        attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.
        Company may freely assign these Terms. The terms and conditions set forth in these Terms shall be binding upon
        assignees.
      </p>

      <p>
        Your Privacy. Please read our Privacy Policy.
      </p>

      <p>
        Copyright/Trademark Information. Copyright ©. All rights reserved. All trademarks, logos and service marks
        displayed on the Site are our property or the property of other third-parties. You are not permitted to use
        these Marks without our prior written consent or the consent of such third party which may own the Marks.
      </p>

      <h3>
        Contact Information
      </h3>

      <p>
        Address: 55 Main Street, Some Town, CA, 12345
      </p>

      <p>
        Email: <a href="mailto:info@runbuddy.io">info@runbuddy.io</a>
      </p>
```

This is a lot of content, but that is why copy and paste exists!

Now that we are done adding content it is a good time for us to start including the styles for the page, but first let's take one more look at how the browser displays all of this HTML without any CSS included:

![privacy policy html](assets/step-7/300-html-complete.png)

It's not as pretty as it will be when we add in our CSS, but the browser still prints everything out to the page in a very organized and readable fashion. To reiterate concepts we've discussed earlier in this project, this is what's known as the "normal flow" of a web page. Everything comes onto the page in the order it was placed in the HTML document and all content gets its own space based on what HTML tag wraps it. While the result isn't the most visually appealing, it serves its core purpose very well, which is to get HTML content to the visitor.

Well that's enough praise for the browser and its default styling, let's add our own!

> PRO-TIP: Don't forget to save and publish your work!

## 
