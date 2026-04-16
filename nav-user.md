### SAM-79 ログアウト時のバグ修正

```javascript
const handleLogout = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/company-logout`,
        {},
        {
          withCredentials: true,
        },
      );
      // /loginへリダイレクト
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      logout();
    }
```

## error
<img width="1916" height="982" alt="Screenshot 2026-04-16 at 10 02 44" src="https://github.com/user-attachments/assets/98b84aaa-bf10-4401-a8fa-995a91d20b7e" />


### Reason: logout() is being called inside finally, so it runs after router.replace("/login") starts and can immediately change the auth state / rerender the app, which may interrupt or conflict with the redirect.

### Solution:

```Javascript
  const handleLogout = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/company-logout`,
        {},
        {
          withCredentials: true,
        },
      );
    // Clear authentication state first
      logout();
      // /loginへリダイレクト
      router.replace("/login");
    } catch (error: any) {
      console.error("Logout failed:", error);
      toast.error("Logout failed:", error);
    } 
  };
```


