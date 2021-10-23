export const API_URL = "https://netime.glitch.me/api/v1";

export const CONTACT = [
  {app:'Facebook', link:'https://www.facebook.com/hoahv01/', icon: <i className="fab fa-facebook-f"></i>},
  {app:'Github', link:'https://github.com/vanhoaltw', icon: <i className="fab fa-github"></i>},
  {app:'Linked', link:'https://www.linkedin.com/in/vanhoaltw/', icon: <i className="fab fa-linkedin-in"></i>},

]

export const mainMenu = [
    {name: 'Trang chủ', url:'/', list:false},
    {name: 'Thể loại', url:'', list:true},
    {name: 'Bảng xếp hạng', url:'', list:true},
    {name: 'Liên hệ', url:'/contact', list: false}
]

export const GENRES = [
    { slug: "hanh-dong", name: "Hành Động" },
    { slug: "vien-tuong", name: "Viễn Tưởng" },
    { slug: "lang-man", name: "Lãng Mạn" },
    { slug: "kinh-di", name: "Kinh Dị" },
    { slug: "vo-thuat", name: "Võ Thuật" },
    { slug: "hai-huoc", name: "Hài Hước" },
    { slug: "truong-hoc", name: "Trường Học" },
    { slug: "trinh-tham", name: "Trinh Thám" },
    { slug: "am-nhac", name: "Âm Nhạc" },
    { slug: "phieu-luu", name: "Phiêu Lưu" },
    { slug: "sieu-nhien", name: "Siêu Nhiên" },
    { slug: "doi-thuong", name: "Đời Thường" },
    { slug: "gia-tuong", name: "Giả Tưởng" },
    { slug: "robot", name: "Robot" },
    { slug: "game", name: "Game" },
    { slug: "the-thao", name: "Thể Thao" },
    { slug: "kich-tinh", name: "Kịch Tính" },
  ];
  
  export const RANKINGS = [
    {
      slug: "ngay",
      name: "BXH ngày",
    },
    {
      slug: "tuan",
      name: "BXH tuần",
    },
    {
      slug: "thang",
      name: "BXH tháng",
    },
    {
      slug: "nam",
      name: "BXH năm",
    },
  ];