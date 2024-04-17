import React from 'react'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <header className="bg-black-900 text-white py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">Brain Detaction</div>
        <nav>
          <ul className="flex space-x-10 pr-44">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="relative bg-[#cbd5e1] text-white ext-stroke-black  w-full h-full py-60 px-6">
  <img className='absolute inset-0 object-cover w-full h-full' src="brain image.jpeg" alt="hero.page" />
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1 className="text-4xl lg:text-8xl font-bold mb-4 border-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] shadow-2xl">Detect Brain Tumors with AI</h1>
    <p className="text-lg lg:text-4xl font-bold mb-8 border-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] shadow-2xl">Upload your MRI images and get instant results</p>
    <button className="bg-[#f9fafb] hover:bg-[#f3f4f6] text-black font-semibold py-3 px-8 rounded-full border-black shadow-lg">Upload MRI</button>
  </div>
</section>


      <section id="features" className="bg-black-950 text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Features</h2>
    {/* Feature Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
      <div className="bg-black-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Accurate Detection</h3>
        <p className="text-lg">Our AI model provides accurate detection of brain tumors from MRI images.</p>
      </div>
      <div className="bg-black-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Fast Results</h3>
        <p className="text-lg">Get instant results within seconds of uploading your MRI images.</p>
      </div>
      <div className="bg-black-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
        <p className="text-lg">Our platform offers an intuitive and easy-to-use interface for seamless user experience.</p>
      </div>
    </div>
  </div>
</section>


      <section id="contact" className="bg-[#18181b] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Contact Us</h2>
    {/* Contact Form */}
    <form className="max-w-lg mx-auto">
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2 text-left" htmlFor="name">Name</label>
        <input className="w-full bg-black-700 text-white rounded-lg py-3 px-4" type="text" id="name" name="name" placeholder="Enter your name" />
      </div>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2 text-left" htmlFor="email">Email</label>
        <input className="w-full bg-black-700 text-white rounded-lg py-3 px-4" type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2 text-left" htmlFor="message">Message</label>
        <textarea className="w-full bg-black-700 text-white rounded-lg py-3 px-4" id="message" name="message" rows="6" placeholder="Enter your message"></textarea>
      </div>
      <button className="bg-black hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full" type="submit">Submit</button>
    </form>
  </div>
</section>


      <footer className="bg-gray-900 text-white py-4 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Your Project Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App