import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import './Home.css';
import PetitionList from './PetitionList';
import Banner from './Banner';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const { TwitterShareButton, EmailShareButton, FacebookShareButton, GooglePlusShareButton } = ShareButtons;

const EmailIcon = generateShareIcon('email');
const GooglePlusIcon = generateShareIcon('google');
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const shareUrl = 'https://speak-frontend.appspot.com/'
const title = 'Speak - UB Petitions'

const Home = () => (
  <div className="Home">
      <Banner/>
      <Grid>
      <Row>
      <Col xs={12} xsOffset={2} md={8}>
      <PetitionList/>
      </Col>
      </Row>
      </Grid>
      <Button classname="reportBug"
          type="submit"
          href="https://github.com/CSE442-SPEAK/speak/issues"
          bsStyle="success"
      > Report Bug </Button>
      <Button classname="submitFeedback"
          type="submit"
          href="https://goo.gl/forms/nOOMUQiaAcuxLxs02"
          bsStyle="success"
      > Submit Feedback </Button>
      <div className="socialmedia">
        <TwitterShareButton
            url={shareUrl}
            title={title}
            className="ExamplePetition">
            <TwitterIcon
              size={48}
              round />
          </TwitterShareButton>
          <FacebookShareButton
          url={shareUrl}
          className="ExamplePetition">
          <FacebookIcon
          size={48}
          round />
          </FacebookShareButton>
          <GooglePlusShareButton
            url={shareUrl}
            className="ExamplePetition">
          <GooglePlusIcon
          size={48}
          round />
          </GooglePlusShareButton>
          <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="ExamplePetition">
          <EmailIcon
          size={48}
          round />
          </EmailShareButton>
        </div>
  </div>
);

export default Home;
