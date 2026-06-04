import { useState } from "react";
import api from "../services/api";

export default function useGithubUser() {

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const fetchUser = async (
    username
  ) => {

    try {

      setLoading(true);

      setError("");

      const response =
        await api.get(
          `/github/${username}`
        );

      return response.data;

    } catch {

      setError(
        "User not found"
      );

      return null;

    } finally {

      setLoading(false);

    }

  };

  return {
    loading,
    error,
    fetchUser
  };
}