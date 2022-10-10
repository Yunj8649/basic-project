import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  private client_id = 'fpoMSCcL_n8jI5PI_hF7';
  private client_secret = 'xjkF4mrTPo';
  private state = 'RANDOM_STATE';
  private redirectURI = encodeURI('http://localhost');
  private api_url = '';

  @Get('/naverlogin')
  async naverLogin(req, res) {
    console.log('req : ', req);
    console.log('res : ', res);
    this.api_url =
      'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
      this.client_id +
      '&redirect_uri=' +
      this.redirectURI +
      '&state=' +
      this.state;
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end(
      "<a href='" +
        this.api_url +
        "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>",
    );
  }
}
