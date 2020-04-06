package com.example.prototype1.data;

import com.example.prototype1.data.Result;
import com.example.prototype1.data.model.LoggedInUser;

import java.io.IOException;

public class ResigterDataSource {

    public Result<LoggedInUser> register(String username, String password) {

        try {
            // TODO: handle loggedInUser authentication
            LoggedInUser fakeUser =
                    new LoggedInUser(
                            java.util.UUID.randomUUID().toString(),
                            "John Doe");
            return new Result.Success<>(fakeUser);
        } catch (Exception e) {
            return new Result.Error(new IOException("Error logging in", e));
        }
    }
}
