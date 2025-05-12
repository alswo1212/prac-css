class IconData {
  constructor(width, height, bgPosition, content, bgSize = '') {
    this.width = width
    this.height = height
    this.bgPosition = bgPosition
    this.content = content
    this.bgSize = bgSize
  }
}

export const iconDatas = {
  nLogo: new IconData('24px', '22px', '-36px -4px', ''),
  keyboard: new IconData('20px', '12px', '-4px -36px', '입력도구'),
  searchLayer: new IconData('10px', '6px', '-182px -115px', '검색 레이어'),
  searchIcon: new IconData('24px', '24px', '-4px -4px', '검색'),
  allService: new IconData('16px', '16px', '-2px -130px', '', 'auto'),
  searchOption: new IconData('18px', '4px', '-4px -168px', ''),
  share: new IconData('15px', '12px', '-182px -32px', ''),
  info: new IconData('15px', '16px', '-83px -215px', ''),
  question: new IconData('16px', '16px', '-222px -313px', '', '391px 378px'),
}

export const searchIconUrl = "https://ssl.pstatic.net/sstatic/search/pc/img/sp_svg_common_e8e63c2d.svg"
export const commonIconUrl = "https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v16.png?v=202307"
export const common2IconUrl = "https://ssl.pstatic.net/sstatic/search/pc/img/sp_common2_02710f69.png"
export const keypageIconUrl = "	https://ssl.pstatic.net/sstatic/keypage/outside/scui/cs_common_module/img/sp_img_light_v22.png"
