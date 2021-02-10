import { NowRequest, NowResponse } from '@vercel/node'


function saveSubscribedEmail(email: string) {
  console.log(`Saved email: ${email}`);
}


export default (req: NowRequest, res: NowResponse) => {
  const { email } = req.body

  // Simulate DB transaction
  setTimeout(() => {
    saveSubscribedEmail(email)
    res.status(201).json({ subscription: `${email} subscribed!` })
  }, 2000)
}
