            <div className="flex justify-center items-center w-full">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="flex flex-col justify-center items-center w-full max-w-[510px] px-3"
              >
                <div className="flex flex-col justify-center w-full">
                  <label htmlFor="email address">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    className="outline-none w-full px-4 py-2 rounded-lg bg-white border border-gray-400"
                  />
                </div>

                <div className="flex flex-col pt-3 justify-center w-full">
                  <label
                    htmlFor="password"
                    className="flex items-center justify-between pr-2"
                  >
                    <p>Your Password</p>{" "}
                    <p
                      onClick={togglePassword}
                      className="flex items-center cursor-pointer gap-1 "
                    >
                      {" "}
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-600" />
                      )}{" "}
                      Hide
                    </p>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    value={form.password}
                    onChange={handleInputChange}
                    className="outline-none w-full px-4 py-2 rounded-lg bg-white border border-gray-400"
                  />
                  <p className="text-right underline py-2 cursor-pointer">
                    Forget your password?
                  </p>
                </div>

                <button
                  type="submit"
                  className={`w-full px-10 py-2 my-2 rounded-3xl border-2 border-blue-800 transition duration-500 flex items-center justify-center ${
                    isLoading
                      ? "bg-blue-700 text-white"
                      : "bg-blue-800 text-white hover:bg-transparent hover:text-blue-800"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                  {isLoading && (
                    <svg
                      className="animate-spin ml-2 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                </button>
              </form>
              <p className=" ">
                Dont't have an account?{" "}
                <Link to="/signup">
                  <span className="font-medium underline cursor-pointer">
                    Sign up
                  </span>
                </Link>
              </p>
            </div>