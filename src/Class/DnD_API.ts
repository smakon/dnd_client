import axios from '../axios'
import { AxiosResponse } from 'axios'

export class DnD_INFO {
	public async getClass(name: string): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.post(
				`https://www.dnd5eapi.co/api/${name}`
			)
			return response
		} catch (error) {
			console.error('Ошибка при изменении данных пользователя:', error)
			throw error
		}
	}

	public async getClasses(): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await axios.post(
				`https://www.dnd5eapi.co/api/classes`
			)
			return response
		} catch (error) {
			console.error('Ошибка при изменении данных пользователя:', error)
			throw error
		}
	}
}
