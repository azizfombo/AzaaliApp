import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserSession {
    nom: number;
    prenom: string;
    dateNaissance: string;
    email: string;
}

export const getUserSession = async (): Promise<UserSession | null> => {
    try {
        const sessionData = await AsyncStorage.getItem("userSession");
        if (sessionData) {
            return JSON.parse(sessionData) as UserSession;
        }
        return null;
    } catch (error) {
        console.error("Erreur lors de la récupération de la session utilisateur :", error);
        throw new Error("Impossible de récupérer la session utilisateur.");
    }
};

/**
 * Supprime la session utilisateur stockée dans AsyncStorage.
 */
export const clearUserSession = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem("userSession");
        console.log("Session utilisateur supprimée avec succès.");
    } catch (error) {
        console.error("Erreur lors de la suppression de la session utilisateur :", error);
        throw new Error("Impossible de supprimer la session utilisateur.");
    }
};
