class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const emailIdx = new Map(); // email -> id
        const emails = []; // set of emails of all accounts
        const emailToAcc = new Map(); // email_index -> account_Id
        const adj = [];
        const emailGroup = new Map(); // index of acc -> list of emails
        let visited = [];

        const n = accounts.length;
        let m = 0;

        // Build email index and mappings
        for (let accId = 0; accId < n; accId++) {
            const account = accounts[accId];
            for (let i = 1; i < account.length; i++) {
                const email = account[i];
                if (!emailIdx.has(email)) {
                    emails.push(email);
                    emailIdx.set(email, m);
                    emailToAcc.set(m, accId);
                    m++;
                }
            }
        }

        // Build adjacency list
        for (let i = 0; i < m; i++) {
            adj.push([]);
        }
        for (const account of accounts) {
            for (let i = 2; i < account.length; i++) {
                const id1 = emailIdx.get(account[i]);
                const id2 = emailIdx.get(account[i - 1]);
                adj[id1].push(id2);
                adj[id2].push(id1);
            }
        }

        // Initialize visited array
        visited = Array(m).fill(false);

        // DFS traversal
        const dfs = (node, accId) => {
            visited[node] = true;
            emailGroup.get(accId).push(emails[node]);
            for (const neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor, accId);
                }
            }
        };

        for (let i = 0; i < m; i++) {
            if (!visited[i]) {
                const accId = emailToAcc.get(i);
                if (!emailGroup.has(accId)) {
                    emailGroup.set(accId, []);
                }
                dfs(i, accId);
            }
        }

        // Build result
        const res = [];
        for (const [accId, group] of emailGroup.entries()) {
            group.sort();
            const merged = [accounts[accId][0], ...group];
            res.push(merged);
        }

        return res;
    }
}