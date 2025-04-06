import React from "react";

function About() {
  return (
    <div className="w-[90%] mx-auto p-6 my-10 rounded-2xl bg-[#F8FAFC] shadow-lg text-[#1E293B]">
      <h2 className="text-4xl font-bold mb-6 font-PlayfairDisplay">
        About BookHub
      </h2>

      <p className="mb-4 text-lg font-Inter">
        Welcome to <strong>BookHub</strong>, your go-to platform for discovering
        books tailored to your interests. In a world filled with endless reading
        options, we make book discovery seamless and enjoyable. Whether you're
        an avid reader or just starting your reading journey, BookHub helps you
        find the perfect book based on your preferences, past reads, and
        trending recommendations.
      </p>

      <p className="mb-4 text-lg font-Inter">
        At BookHub, we combine cutting-edge technology with a deep love for
        literature. Our intelligent recommendation system analyzes genres,
        authors, and reader feedback to offer personalized suggestions. From
        bestsellers to hidden gems, we ensure that every reader finds something
        they truly enjoy.
      </p>

      <p className="mb-4 text-lg font-Inter">
        Our mission is to connect readers with books that inspire, educate, and
        entertain. We believe that the right book can change perspectives, spark
        creativity, and open new worlds of knowledge. That’s why we are
        committed to enhancing your reading experience through smart
        recommendations, curated lists, and a vibrant community of book lovers.
      </p>

      <p className="mb-6 text-lg font-Inter">
        Join BookHub today and let us help you explore, discover, and fall in
        love with books all over again!
      </p>

      <p className="font-semibold font-Inter">Happy Reading!</p>
      <p className="font-semibold font-Inter">– The BookHub Team</p>
    </div>
  );
}

export default About;
