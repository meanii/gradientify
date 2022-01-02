export default function Header() {
    return (
      <div className="navbar mb-5 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">Gradientify 🌈</span>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <a href='https://meanii.codes' className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
            <a href='https://blog.meanii.codes' className="btn btn-ghost btn-sm rounded-btn">Blogs</a>
            <a className="btn btn-ghost btn-sm rounded-btn">About</a>
            <a href='https://github.com/meanii/gradientify' className="btn btn-ghost btn-sm rounded-btn">Github</a>
          </div>
        </div>
      </div>
    );
  }
  