import axios from 'axios';

const CLIENT_ID = '2kF9Wi_1RuWz3MKF9ignkQ';
const CLIENT_SECRET = 'RSy9RLAxx8aQ6YGqPidZU3UKiejxpL1b';
const REDIRECT_URI = 'https://www.google.com';
const ACCOUNT_ID = 'mje58fhORBeJDlagPPxLNw';

export default async function handler(req, res) {
  try {
    const tokenResponse = await axios.post('https://zoom.us/oauth/token', null, {
      params: {
        grant_type: 'client_credentials',
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    });

    const accessToken = tokenResponse.data.access_token;

    const meetingResponse = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        topic: 'New Meeting',
        type: 1,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json(meetingResponse.data);
  } catch (error) {
    console.error('Error creating meeting:', error);
    res.status(500).json({ error: 'Failed to create meeting' });
  }
}
