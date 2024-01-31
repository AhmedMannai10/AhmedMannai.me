"use client";

import React, { useState } from "react";

import axios from "axios";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace the API key with your actual Sendinblue API key
      const response = await axios.post(
        "https://api.sendinblue.com/v3/contacts",
        { updateEnabled: false, email: email },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY,
          },
        }
      );
      console.log(response.data);
      setSubscribed(true);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscribe to our newsletter</CardTitle>
        <CardDescription>
          Stay up to date with what I'm working on and get notified when I post.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              autoFocus={false}
              disabled={subscribed}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
      </CardContent>
      {error && (
        <CardFooter className="mb-2">
          There was an error subscribing to the newsletter. Please try again
          later.
        </CardFooter>
      )}
    </Card>
  );
}
