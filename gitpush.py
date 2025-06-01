import subprocess

def format_number(num):
    return f"0{num}" if num < 10 else str(num)

def git_push(branch="main"):
    try:
        commit_message = input("Enter your commit message: ")
        message = f'{commit_message}'
        subprocess.run(["git", "add", "."], check=True)
        subprocess.run(["git", "commit", "-m", message], check=True)
        subprocess.run(["git", "push", "origin", branch], check=True)

        print("git push successful!")
        print("\033[92mCompleted\033[0m")

    except subprocess.CalledProcessError as e:
        print(f"\033[91mError: {e}\033[0m")
        print("\033[91mgit push failed.\033[0m")

if __name__ == "__main__":
    git_push("05312025_development")
