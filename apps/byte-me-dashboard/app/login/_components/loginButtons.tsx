"use client"

import { Button } from "@workspace/ui/components/button"
import GithubIcon from "@workspace/ui/icons/github-icon"
import GoogleIcon from "@workspace/ui/icons/google-icon"
import { authClient } from "@workspace/auth/client"

export default function LoginButtons() {
  const LoginWithGithub = async () =>
    await authClient.signIn.social({
      callbackURL: "https://byte-me.dylanchan.dev/overview",
      provider: "github",
    })

  const LoginWithGoogle = async () =>
    await authClient.signIn.social({
      callbackURL: "https://byte-me.dylanchan.dev/overview",
      provider: "google",
    })

  return (
    <div className="flex items-center justify-between gap-5">
      <Button className="flex-1" variant={"outline"} onClick={LoginWithGithub}>
        <GithubIcon />
        Github
      </Button>
      <Button className="flex-1" variant={"outline"} onClick={LoginWithGoogle}>
        <GoogleIcon />
        Google
      </Button>
    </div>
  )
}
