export const siteConfig = {
  getHeaderLinks: () => {
    const items = [
      {
        title: "How it Works",
        href: "/#how-it-works",
      },
      {
        title: "Benefits",
        href: "/#benefits",
      },
      {
        title: "Work",
        href: "/#work",
      },
      {
        title: "Pricing",
      },
      {
        title: "FAQs",
      },
      {
        title: "About",
      },
    ];

    return items;
  },

  images: {
    homebg:
      "https://framerusercontent.com/images/3hiBbgyX1cjx1RlBiJym2iLCo.png",
    aboutuspic:
      "https://images.followalice.com/LYMth03VDX1xjGGrW9WG0/407a868f99d578f7585b8f38ff7d6c33/Ours._S._Buddha_dordenma_statue_with_monks_and_tourists_in_Thimphu__Bhutan.jpg?q=80&fit=fill&f=center&w=1200&h=1200",
  },

  imageGroupOne: () => {
    const images = [
      "https://fh-sites.imgix.net/sites/3119/2019/11/28111731/Punakha-Dzong-e1574919168213.jpg?auto=compress%2Cformat&w=1200&fit=max",
      "https://www.andbeyond.com/wp-content/uploads/sites/5/padd-field-thimpu-bhutan.jpg",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1669904737/221130-oconnor-bhutan-hero_p5ua9c",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Paro%2C_Paro%2C_Bhutan_%288026008882%29.jpg/640px-Paro%2C_Paro%2C_Bhutan_%288026008882%29.jpg",
    ];

    return images;
  },
};
