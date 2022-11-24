import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Blogs = () => {
  return (
    <div>
      <>
        <Navbar></Navbar>
      </>
      <div class="container mx-auto px-4 mt-6">
        <>
          <div class="container mx-auto px-4">
            <u>Question 1:-</u> What are the Different ways to manage a state in
            a React application? <br />
            <u>Answer:-</u> The Four Kinds of React State to Manage When we talk
            about state in our applications, it’s important to be clear about
            what types of state actually matter. There are four main types of
            state you need to properly manage in your React apps: <br /> 1.Local
            state <br /> 2.Global state <br /> 3.Server state <br /> 4.URL state{" "}
            <br /> Let's cover each of these in detail: <br /> Local (UI) state
            :- Local state is data we manage in one or another component. Local
            state is most often managed in React using the useState hook. For
            example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs. <br /> Global (UI) state - Global state is data we manage
            across multiple components. Global state is necessary when we want
            to get and update data anywhere in our app, or in multiple
            components at least. A common example of global state is
            authenticated user state. If a user is logged into our app, it is
            necessary to get and change their data throughout our application.
            Sometimes state we think should be local might become global. <br />{" "}
            Server state - Data that comes from an external server that must be
            integrated with our UI state. Server state is a simple concept, but
            can be hard to manage alongside all of our local and global UI
            state. There are several pieces of state that must be managed every
            time you fetch or update data from an external server, including
            loading and error state. Fortunately there are tools such as SWR and
            React Query that make managing server state much easier. <br />
            URL state – Data that exists on our URLs, including the pathname and
            query parameters. URL state is often missing as a category of state,
            but it is an important one. In many cases, a lot of major parts of
            our application rely upon accessing URL state. Try to imagine
            building a blog without being able to fetch a post based off of its
            slug or id that is located in the URL! There are undoubtedly more
            pieces of state that we could identify, but these are the major
            categories worth focusing on for most applications you build.
          </div>
        </>
        <>
          <div class="container mx-auto px-4 mt-6">
            <u>Question 2:-</u> How does prototypical inheritance work? <br />
            <u>Answer:-</u>
            In programming, we often want to take something and extend it. For
            instance, we have a user object with its properties and methods, and
            want to make admin and guest as slightly modified variants of it.
            We’d like to reuse what we have in user, not copy/reimplement its
            methods, just build a new object on top of it. Prototypal
            inheritance is a language feature that helps in that.
            <ul className="list-disc">
              <li>
                In JavaScript, all objects have a hidden [[Prototype]] property
                that’s either another object or null.
              </li>
              <li>
                We can use obj.__proto__ to access it (a historical
                getter/setter, there are other ways, to be covered soon). The
                object referenced by [[Prototype]] is called a “prototype”.
              </li>
              <li>
                If we want to read a property of obj or call a method, and it
                doesn’t exist, then JavaScript tries to find it in the
                prototype.
              </li>
              <li>
                Write/delete operations act directly on the object, they don’t
                use the prototype (assuming it’s a data property, not a setter).
              </li>
              <li>
                If we call obj.method(), and the method is taken from the
                prototype, this still references obj. So methods always work
                with the current object even if they are inherited.
              </li>
              <li>
                The for..in loop iterates over both its own and its inherited
                properties. All other key/value-getting methods only operate on
                the object itself.
              </li>
            </ul>
          </div>
        </>
        <>
          <div class="container mx-auto px-4 mt-6">
            <u>Question 3:-</u> What is a unit Test? Why Should we write unit
            Tests? <br />
            <u>Answer:-</u> In computer programming, unit testing is a software
            testing method by which individual units of source code—sets of one
            or more computer program modules together with associated control
            data, usage procedures, and operating procedures—are tested to
            determine whether they are fit for use. <br /> Unit tests are
            typically automated tests written and run by software developers to
            ensure that a section of an application (known as the "unit") meets
            its design and behaves as intended. In procedural programming, a
            unit could be an entire module, but it is more commonly an
            individual function or procedure. In object-oriented programming, a
            unit is often an entire interface, such as a class, or an individual
            method. By writing tests first for the smallest testable units, then
            the compound behaviors between those, one can build up comprehensive
            tests for complex applications. <br /> To isolate issues that may
            arise, each test case should be tested independently. Substitutes
            such as method stubs, mock objects, fakes, and test harnesses can be
            used to assist testing a module in isolation. <br />
            During development, a software developer may code criteria, or
            results that are known to be good, into the test to verify the
            unit's correctness. During test case execution, frameworks log tests
            that fail any criterion and report them in a summary. For this, the
            most commonly used approach is test - function - expected value.{" "}
            <br />
            Some developers underestimate the importance of writing unit tests.
            What follows are five benefits of unit testing that you may want to
            consider before forming your own opinion. <br /> Any bugs are found
            easily and quicker. <br /> Code covered with tests is more reliable
            than the code without. If a future change breaks something in the
            code, developers will be able to identify the root of the problem
            right away rather than coming through an unwieldy codebase to find
            the issue. <br /> Best practices suggest that developers first run
            all unit tests or a group of tests locally to make sure any coding
            changes don’t disrupt the existing code. However, consider the human
            factor: A developer might forget to run unit tests after making
            changes and submit potentially non-working code to a common branch.
            To avoid this, many companies apply a continuous development
            approach. Tools for continuous integration are used for this,
            allowing developers to run unit tests automatically. Thus, any
            unwanted changes in the code will be detected by a cold, logical
            machine.
          </div>
        </>
        <>
          <div class="container mx-auto px-4 mt-6">
            <u>Question 4:-</u> React VS Angular VS Vue ? <br />
            <u>Answer:-</u>
            <br />
            How it all started <br />
            <i>Angular</i>, developed by Google, was first released in 2010,
            making it the oldest of the lot. It is a TypeScript-based JavaScript
            framework. A substantial shift occurred in 2016 on the release of
            Angular 2 (and the dropping of the “JS” from the original name -
            AngularJS). Angular 2+ is known as just Angular. Although AngularJS
            (version 1) still gets updates, we will focus the discussion on
            Angular. <br />
            <i> Vue</i>, also known as Vue.js, is the youngest member of the
            group. It was developed by ex-Google employee Evan You in 2014. Over
            the last several years, Vue has seen a substantial shift in
            popularity, even though it doesn’t have the backing of a large
            company. The most current version is always announced on the
            official Vue website on their releases page. Contributors for Vue
            are supported by Patreon. It should be noted that Vue also has its
            own GitHub repo, and functions using TypeScript. <br />
            <i>React</i>, developed by Facebook, was initially released in 2013.
            Facebook uses React extensively in their products (Facebook,
            Instagram, and WhatsApp). Similar to Vue, the React developers also
            announce their newest version on the blog section of the React
            website. <br />
            <i>
              <u>Popularity</u>
            </i>
            🔥 <br /> As “angular” and “react” are common words, it is difficult
            to grasp their popularity from Google Trends. Though, a good proxy
            for their popularity is the number of stars that their GitHub
            repositories get. A sudden shift in the number of stars of Vue
            occurred in mid-2016 and, recently, Vue has been up there with React
            among the most popular frameworks.
          </div>
        </>
      </div>
      <>
        <Footer></Footer>
      </>
    </div>
  );
};

export default Blogs;
