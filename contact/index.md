---
layout: layouts/base.njk
title: Contact
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 3
---

<div class="container py-4">

  <h1 class="display-4 mb-5">Contact Me</h1>
  <form name="contact" method="POST" data-netlify="true">

  <div class="mb-3">
      <label class="form-label" for="name">Name</label>
      <input class="form-control" name="name" type="text" placeholder="Name" required />
    </div>

  <div class="mb-3">
      <label class="form-label" for="emailAddress">Email Address</label>
      <input class="form-control" name="emailAddress" type="email" placeholder="Email Address" required/>
    </div>

  <div class="mb-3">
      <label class="form-label" for="message">Message</label>
      <textarea class="form-control" name="message" type="text" placeholder="Message" style="height: 10rem;" required></textarea>
    </div>

  <div class="form-check mb-3">
  <input class="form-check-input" type="checkbox" value="" name="flexCheckDefault" required>
  <label class="form-check-label" for="flexCheckDefault">
    I agree to the <a href="/contact/tnc/index.html">Terms and Conditions</a>
  </label>

  <div class="d-grid my-5">
      <button class="btn btn-primary btn-lg" type="submit">Submit</button>
    </div>
</div>

  </form>

</div>
